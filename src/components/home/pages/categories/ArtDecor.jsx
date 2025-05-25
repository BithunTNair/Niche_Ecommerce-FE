import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../navbar/Navbar";
import { Input } from "../../../reusable/Input";
import { Button } from "../../../reusable/Button";

const ArtDecor = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-4 sm:p-6 md:p-10 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center mb-16 px-2">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-green-800 mb-4 leading-tight">
          Art & Decor
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
          Explore beautifully crafted art and home decor items by talented artisans.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 px-2">
          <Input
            placeholder="Search art & decor..."
            className="w-full sm:w-80 border border-gray-300 rounded-xl px-4 py-2 shadow-sm"
          />
          <Button className="rounded-xl px-6 w-full sm:w-auto">Search</Button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="mb-20 px-2">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-left ml-1">
          Featured Art & Decor
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition transform hover:scale-[1.02]"
            >
              <div className="h-44 bg-green-100 rounded-xl mb-4 flex items-center justify-center text-green-600 text-xl font-bold">
                Art Item #{item}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1">
                Decorative Piece #{item}
              </h3>
              <p className="text-sm text-gray-500 mb-3">Category: Art & Decor</p>
              <Link to={`/categories/art-decor/${item}`}>
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

export default ArtDecor;
