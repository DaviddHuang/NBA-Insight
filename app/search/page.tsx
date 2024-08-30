"use client";
import React from "react";
import Navbar from "../components/Navbar";
import AnimatedText from "../components/AnimatedText";

export default function Page() {
  const handleSearch = () => {
    alert("Search triggered!");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="px-8 pt-8">
        <AnimatedText
          text="Search"
          el="h1"
          className="text-center text-4xl md:text-6xl font-serif pt-16 md:pt-28 customFontClass"
        />
      </div>
      <div className="mt-8 flex justify-center">
        <div className="flex">
          <input
            type="text"
            placeholder="Search for players..."
            className="p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500 w-96"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-3 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
}
