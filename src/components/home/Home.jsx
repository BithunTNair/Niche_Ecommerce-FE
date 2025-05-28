import React, { useState } from "react";
import { Button } from "../reusable/Button";
import { Input } from "../reusable/Input";
import Navbar from "../navbar/Navbar";
import { useEffect } from "react";
import AxiosInstance from "../../config/Api_call";

export default function HomePage() {

  const [products, setProducts]=useState([]);

  useEffect(() => {

    AxiosInstance.get(`${import.meta.env.VITE_BASE_URL}/user/approved_products`)
      .then((res) => {

        setProducts(res.data.approvedProducts.slice(0, 6));
      })
      .catch((err) => {
        console.error("Error fetching products", err);
      });
  }, []);
  return (
    <>

      <div className="min-h-screen bg-[var(--gray)] p-4 sm:p-6 md:p-10 font-sans">
        {/* Header */}
        <Navbar />

        {/* Hero Section */}
        <section className="text-center mb-16 px-2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[var(--yellow)] mb-4 leading-tight">
            Discover Handmade Treasures
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Empowering artisans across the nation by showcasing unique, handcrafted products. Shop directly from skilled creators and support local talent.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 px-2">
            <Input
              placeholder="Search handmade items..."
              className="w-full sm:w-80 border border-gray-300 rounded-xl px-4 py-2 shadow-sm"
            />
            <Button className="rounded-xl px-6 w-full sm:w-auto">Search</Button>
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-20 px-2">
          <h3 className="text-xl sm:text-2xl font-semibold text-[var(--yellow)] mb-6 text-left ml-1">
            Featured Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {products.map((item, index) => (
              <div
                key={item._id || index}
                className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition transform hover:scale-[1.02]"
              >
                <div className="h-40 sm:h-44 bg-[var(--lightblack)] rounded-xl mb-4 flex items-center justify-center text-[var(--white)] text-lg sm:text-xl font-bold">
                  {item.image ? <img src={item.image} alt="Product" className="h-full object-cover rounded-xl" /> : "Product Img"}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1">
                  {item.name || `Handmade Item #${index + 1}`}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Category: {item.category || "Art & Decor"}
                </p>
                  <p className="text-sm text-gray-500 mb-3">
                  Price: {item.price || ""}
                </p>
                <Button className="w-full rounded-xl mt-2">Add To Cart</Button>
                  <Button className="w-full rounded-xl mt-2">By Now</Button>
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
                We connect local artisans with customers seeking authentic, handmade products. Empowering communities through craftsmanship.
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
              <p>Email: support@nichenest.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: Kerala, India</p>
            </div>
          </div>
          <p className="mt-8">
            © 2025 NIcheNest. Celebrating handmade culture.
          </p>
        </footer>
      </div>
    </>
  );
}
