import React from "react";
import { useParams } from "react-router-dom";

// Static Jewelry product data
const jewelryProducts = {
  1: {
    title: "Terracotta Necklace Set",
    description: "Handcrafted terracotta necklace with matching earrings.",
    price: "₹1,299",
    stock: 7,
    artisan: "Aarti Deshmukh",
    image: "/images/jewelry1.jpg",
  },
  2: {
    title: "Oxidized Silver Jhumkas",
    description: "Traditional oxidized silver earrings with detailed carvings.",
    price: "₹699",
    stock: 14,
    artisan: "Neha Chauhan",
    image: "/images/jewelry2.jpg",
  },
  3: {
    title: "Beaded Bracelet Set",
    description: "Colorful beaded bracelets made with love by rural women.",
    price: "₹499",
    stock: 18,
    artisan: "Lalita Yadav",
    image: "/images/jewelry3.jpg",
  },
  4: {
    title: "Kundan Maang Tikka",
    description: "Elegant forehead ornament with kundan stones and pearls.",
    price: "₹850",
    stock: 5,
    artisan: "Meena Rajput",
    image: "/images/jewelry4.jpg",
  },
  5: {
    title: "Thread Bangles",
    description: "Vibrant bangles wrapped in silk thread with mirror accents.",
    price: "₹399",
    stock: 22,
    artisan: "Seema Patel",
    image: "/images/jewelry5.jpg",
  },
  6: {
    title: "Tribal Pendant Necklace",
    description: "Rustic tribal-style necklace with antique finish pendant.",
    price: "₹1,050",
    stock: 9,
    artisan: "Vinod Bhil",
    image: "/images/jewelry6.jpg",
  },
};

export default function JewelryDetailsPage() {
  const { id } = useParams();
  const product = jewelryProducts[id];

  if (!product) {
    return <div className="text-center mt-20 text-red-600">Jewelry item not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 object-cover rounded-xl mb-6"
      />
      <h2 className="text-3xl font-bold text-green-800 mb-3">{product.title}</h2>
      <p className="text-lg text-gray-700 mb-4">{product.description}</p>
      <p className="text-md font-medium text-gray-800 mb-1">Price: {product.price}</p>
      <p className="text-md text-gray-600 mb-1">Stock Available: {product.stock}</p>
      <p className="text-md text-gray-600">Artisan: {product.artisan}</p>
    </div>
  );
}
