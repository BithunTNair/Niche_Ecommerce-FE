import React from "react";
import { useParams } from "react-router-dom";

// Static Clothing product data
const clothingProducts = {
  1: {
    title: "Handwoven Cotton Kurta",
    description: "Breathable handwoven kurta with elegant embroidery work.",
    price: "₹1,499",
    stock: 10,
    artisan: "Renu Sharma",
    image: "/images/clothing1.jpg",
  },
  2: {
    title: "Block Print Dupatta",
    description: "Lightweight cotton dupatta with traditional block prints.",
    price: "₹799",
    stock: 20,
    artisan: "Farida Khan",
    image: "/images/clothing2.jpg",
  },
  3: {
    title: "Khadi Men's Shirt",
    description: "Classic khadi shirt for a sustainable and stylish look.",
    price: "₹1,250",
    stock: 12,
    artisan: "Manish Rawat",
    image: "/images/clothing3.jpg",
  },
  4: {
    title: "Mirror Work Lehenga",
    description: "Colorful traditional lehenga with intricate mirror work.",
    price: "₹3,200",
    stock: 3,
    artisan: "Preeti Rathore",
    image: "/images/clothing4.jpg",
  },
  5: {
    title: "Embroidered Wool Shawl",
    description: "Soft wool shawl with traditional Kashmiri embroidery.",
    price: "₹2,100",
    stock: 5,
    artisan: "Yusuf Dar",
    image: "/images/clothing5.jpg",
  },
  6: {
    title: "Handloom Saree",
    description: "Elegant handloom saree woven from silk and cotton blend.",
    price: "₹2,800",
    stock: 6,
    artisan: "Saraswati Devi",
    image: "/images/clothing6.jpg",
  },
};

export default function ClothingDetailsPage() {
  const { id } = useParams();
  const product = clothingProducts[id];

  if (!product) {
    return <div className="text-center mt-20 text-red-600">Clothing item not found.</div>;
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
