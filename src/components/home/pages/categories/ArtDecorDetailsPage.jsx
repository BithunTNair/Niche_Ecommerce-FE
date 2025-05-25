import React from "react";
import { useParams } from "react-router-dom";

// Static Art & Decor product data
const artDecorProducts = {
  1: {
    title: "Hand-painted Wall Plate",
    description: "A vibrant terracotta plate with traditional Indian artwork.",
    price: "₹1,200",
    stock: 8,
    artisan: "Sunita Mehra",
    image: "/images/art1.jpg",
  },
  2: {
    title: "Bamboo Wind Chime",
    description: "Soothing sounds crafted from eco-friendly bamboo.",
    price: "₹699",
    stock: 15,
    artisan: "Rajiv Singh",
    image: "/images/art2.jpg",
  },
  3: {
    title: "Miniature Painting Frame",
    description: "Detailed Mughal-style miniature painting in a wooden frame.",
    price: "₹2,300",
    stock: 4,
    artisan: "Anjali Gupta",
    image: "/images/art3.jpg",
  },
  4: {
    title: "Clay Tea Light Holders",
    description: "Hand-sculpted and painted festive tea light holders.",
    price: "₹499",
    stock: 25,
    artisan: "Kiran Joshi",
    image: "/images/art4.jpg",
  },
  5: {
    title: "Woven Wall Hanging",
    description: "Intricately woven textile wall art made from jute and cotton.",
    price: "₹1,800",
    stock: 6,
    artisan: "Pooja Rathi",
    image: "/images/art5.jpg",
  },
  6: {
    title: "Mosaic Glass Vase",
    description: "Colorful mosaic glasswork in a stunning decorative vase.",
    price: "₹1,100",
    stock: 12,
    artisan: "Mohit Kapoor",
    image: "/images/art6.jpg",
  },
};

export default function ArtDecorDetailsPage() {
  const { id } = useParams();
  const product = artDecorProducts[id];

  if (!product) {
    return <div className="text-center mt-20 text-red-600">Art item not found.</div>;
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
