"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full fixed z-50">
      <header className="flex justify-between items-center text-black py-4 px-8 md:px-10 bg-[#C8102E] drop-shadow-xl">
        <Link href="/">
          <img
            src="/assets/nba-insight-black.png"
            alt="logo"
            className="w-20 hover:scale-105 transition-all"
          />
        </Link>
        <ul className="hidden xl:flex items-center gap-32 font-semibold text-base">
          {[
            { href: "/", src: "/assets/home.png", text: "Home" },
            { href: "/teams", src: "/assets/team.png", text: "Teams" },
            {
              href: "/positions",
              src: "/assets/position.png",
              text: "Positions",
            },
            { href: "/search", src: "/assets/search.png", text: "Search" },
            { href: "/about", src: "/assets/about.png", text: "About" },
          ].map(({ href, src, text }) => (
            <Link key={href} href={href}>
              <li className="relative p-3 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer group">
                <img
                  src={src}
                  alt={`${text}-icon`}
                  className="w-8 hover:scale-105 transition-all"
                />
                <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-sm px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {text}
                </span>
              </li>
            </Link>
          ))}
        </ul>
        <i
          className="bx bx-menu xl:invisible block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div
          className={`absolute xl:invisible top-20 left-0 w-full bg-[#C8102E] flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          {[
            { href: "/", text: "Home" },
            { href: "/teams", text: "Teams" },
            { href: "/positions", text: "Position" },
            { href: "/search", text: "Search" },
            { href: "/about", text: "About" },
          ].map(({ href, text }) => (
            <Link key={href} href={href}>
              <li className="list-none w-full text-center p-4 hover:bg-[#C8102E] hover:text-white transition-all cursor-pointer">
                {text}
              </li>
            </Link>
          ))}
        </div>
      </header>
    </div>
  );
}
