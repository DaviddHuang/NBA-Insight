"use client";

import Image from "next/image";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState({
    image: false,
    link: false,
  });

  useEffect(() => {
    const imageTimer = setTimeout(
      () => setIsVisible((prev) => ({ ...prev, image: true })),
      100
    );
    const linkTimer = setTimeout(
      () => setIsVisible((prev) => ({ ...prev, link: true })),
      500
    );

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(linkTimer);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen px-4">
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6">
        <Image
          src="/assets/nba2.png"
          width={200}
          height={100}
          alt="nba logo"
          className={`transition-opacity duration-1000 ${
            isVisible.image ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="flex flex-col items-center lg:items-start">
          <AnimatedText
            text="Welcome to NBA Insight!"
            el="h1"
            className="text-3xl lg:text-6xl customFontClass text-center lg:text-left"
          />
          <AnimatedText
            text="The Ultimate NBA Player Hub"
            el="h2"
            className="customFontClass text-lg lg:text-xl text-center lg:text-left ml-1"
          />
          <Link
            href="/teams"
            className={`inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-opacity duration-1000 ${
              isVisible.link ? "opacity-100" : "opacity-0"
            }`}
            style={{ marginTop: "10px" }}
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </div>
  );
}
