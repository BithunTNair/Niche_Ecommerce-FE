import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../navbar/Navbar";
import { Input } from "../../../reusable/Input";
import { Button } from "../../../reusable/Button";

// Static Jewelry product data
const jewelryProducts = {
  1: {
    title: "Terracotta Necklace Set",
    image: "/images/jewelry1.jpg",
  },
  2: {
    title: "Oxidized Silver Jhumkas",
    image: "/images/jewelry2.jpg",
  },
  3: {
    title: "Beaded Bracelet Set",
    image: "/images/jewelry3.jpg",
  },
  4: {
    title: "Kundan Maang Tikka",
    image: "/images/jewelry4.jpg",
  },
  5: {
    title: "Thread Bangles",
    image: "/images/jewelry5.jpg",
  },
  6: {
    title: "Tribal Pendant Necklace",
    image: "/images/jewelry6.jpg",
  },
};

const Jewelry = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-4 sm:p-6 md:p-10 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center mb-16 px-2">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-green-800 mb-4 leading-tight">
          Jewelry
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
          Browse handcrafted jewelry made with love, precision, and cultural charm.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 px-2">
          <Input
            placeholder="Search jewelry..."
            className="w-full sm:w-80 border border-gray-300 rounded-xl px-4 py-2 shadow-sm"
          />
          <Button className="rounded-xl px-6 w-full sm:w-auto">Search</Button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="mb-20 px-2">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-left ml-1">
          Featured Jewelry
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.entries(jewelryProducts).map(([id, product]) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition transform hover:scale-[1.02]"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-44 w-full object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-1">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-3">Category: Jewelry</p>
              <Link to={`/categories/jewelry/${id}`}>
                <Button className="w-full rounded-xl">View Details</Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 text-sm py-10 border-t border-gray-200 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">About Us</h4>
            <p>
              We connect local artisans with customers seeking authentic,
              handmade products. Empowering communities through craftsmanship.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Categories</a></li>
              <li><a href="#" className="hover:underline">Offers</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
            <p>Email: support@desietsy.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: New Delhi, India</p>
          </div>
        </div>
        <p className="mt-8">© 2025 DesiEtsy. Celebrating handmade culture.</p>
      </footer>
    </div>
  );
};

export default Jewelry;
