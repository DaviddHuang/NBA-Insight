"use client";
import React, { useState, ChangeEvent } from "react";
import Navbar from "../components/Navbar";
import Positions from "../data/positions.json";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";

function formatUrl(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const filteredPositions = Positions.filter((position) =>
    position.caption.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="px-8 pt-8">
        <AnimatedText
          text="Positions"
          el="h1"
          className="text-center text-4xl md:text-6xl font-serif pt-16 md:pt-28 customFontClass"
        />
      </div>
      <div className="mt-8 flex justify-center">
        <input
          type="text"
          placeholder="Search positions..."
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 w-96"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredPositions.length > 0 ? (
            filteredPositions.map((position, index) => (
              <div
                className="flex flex-col items-center p-4 rounded-lg opacity-0"
                key={position.id}
                style={{
                  animation: `fadeIn 1s ease-in-out forwards`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="relative group">
                  <img
                    src={position.icon}
                    alt={position.caption}
                    className="w-64 h-64 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-red-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-lg">
                    <div className="text-white text-lg text-center font-serif">
                      {position.caption}
                    </div>
                    <Link
                      href={`/positions/${formatUrl(position.caption)}`}
                      className="mt-2 px-4 py-2 border-2 border-white text-white rounded-md hover:bg-black transition-colors duration-300 flex items-center justify-center"
                    >
                      View Position
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No teams found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
