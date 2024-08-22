"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full h-full absolute">
      <header className="flex justify-between items-center text-black py-4 px-8 md:px-10 bg-[#C8102E] drop-shadow-xl">
        <Link href="/">
          <img
            src="/assets/nba-insight.png"
            alt="logo"
            className="w-20 hover:scale-105 transition-all"
          ></img>
        </Link>
        <ul className="hidden xl:flex items-center gap-32 font-semibold text-base">
          <Link href="/">
            <li className="p-3 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">
              <img
                src="/assets/home.png"
                alt="home-icon"
                className="w-8 hover:scale-105 transition-all"
              ></img>
            </li>
          </Link>
          <Link href="/teams">
            <li className="p-3 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">
              <img
                src="/assets/team.png"
                alt="team-icon"
                className="w-8 hover:scale-105 transition-all"
              ></img>
            </li>
          </Link>
          <Link href="/positions">
            <li className="p-3 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">
              <img
                src="/assets/position.png"
                alt="position-icon"
                className="w-8 hover:scale-105 transition-all"
              ></img>
            </li>
          </Link>
          <Link href="/search">
            <li className="p-3 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">
              <img
                src="/assets/search.png"
                alt="search-icon"
                className="w-8 hover:scale-105 transition-all"
              ></img>
            </li>
          </Link>
          <Link href="/about">
            <li className="p-3 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">
              <img
                src="/assets/about.png"
                alt="about-icon"
                className="w-8 hover:scale-105 transition-all"
              ></img>
            </li>
          </Link>
        </ul>
        <i
          className="bx bx-menu xl:invisible block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
        <div
          className={`absolute xl:invisible top-20 left-0 w-full bg-[#C8102E] flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <Link href="/">
            <li className="list-none w-full text-center p-4 hover:bg-[#C8102E] hover:text-white transition-all cursor-pointer">
              Home
            </li>
          </Link>
          <Link href="/teams">
            <li className="list-none w-full text-center p-4 hover:bg-[#C8102E] hover:text-white transition-all cursor-pointer">
              Teams
            </li>
          </Link>
          <Link href="/positions">
            <li className="list-none w-full text-center p-4 hover:bg-[#C8102E] hover:text-white transition-all cursor-pointer">
              Position
            </li>
          </Link>
          <Link href="/search">
            <li className="list-none w-full text-center p-4 hover:bg-[#C8102E] hover:text-white transition-all cursor-pointer">
              Search
            </li>
          </Link>
          <Link href="/about">
            <li className="list-none w-full text-center p-4 hover:bg-[#C8102E] hover:text-white transition-all cursor-pointer">
              About
            </li>
          </Link>
        </div>
      </header>
    </div>
  );
}
