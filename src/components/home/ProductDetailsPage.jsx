import React from "react";
import { useParams } from "react-router-dom";

// Static product data for IDs 1 to 6
const productData = {
  1: {
    title: "Handmade Wooden Bowl",
    description: "A finely carved bowl made from sustainable teak wood.",
    price: "₹899",
    stock: 10,
    artisan: "Ravi Verma",
    image: "/images/product1.jpg",
  },
  2: {
    title: "Knitted Wool Scarf",
    description: "Soft, warm, and perfect for winter fashion.",
    price: "₹499",
    stock: 20,
    artisan: "Neha Sharma",
    image: "/images/product2.jpg",
  },
  3: {
    title: "Terracotta Vase",
    description: "Beautifully hand-painted traditional Indian vase.",
    price: "₹1,299",
    stock: 5,
    artisan: "Amit Kumar",
    image: "/images/product3.jpg",
  },
  4: {
    title: "Bamboo Serving Tray",
    description: "Eco-friendly tray crafted by rural artisans.",
    price: "₹699",
    stock: 15,
    artisan: "Sunita Mehra",
    image: "/images/product4.jpg",
  },
  5: {
    title: "Embroidered Cushion Cover",
    description: "Vibrant and colorful cushion covers made with love.",
    price: "₹349",
    stock: 25,
    artisan: "Farah Ansari",
    image: "/images/product5.jpg",
  },
  6: {
    title: "Handwoven Jute Bag",
    description: "Stylish and sustainable, perfect for everyday use.",
    price: "₹799",
    stock: 8,
    artisan: "Lalit Das",
    image: "/images/product6.jpg",
  },
};

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = productData[id];

  if (!product) {
    return <div className="text-center mt-20 text-red-600">Product not found.</div>;
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
