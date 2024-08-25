"use client";
import React from "react";
import Navbar from "../components/Navbar";
import AnimatedText from "../components/AnimatedText";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="px-8 pt-8">
        <AnimatedText
          text="About"
          el="h1"
          className="text-center text-4xl md:text-6xl font-serif pt-16 md:pt-28"
        />
      </div>
    </div>
  );
}
