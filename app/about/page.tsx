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
          className="text-center text-4xl md:text-6xl font-serif pt-16 md:pt-28 customFontClass"
        />
        <div className="mt-8 md:mt-12 flex flex-col items-start max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl customFontClass">
              Description
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mt-4">
              NBA Insight is the ultimate NBA player hub. Search for your
              favourite players and teams with ease! All data is taken from
              Basketball-Reference from the 2023-24 NBA season. The website
              provides accurate, comprehensive, and analytical information to
              help you stay informed and engaged with the latest NBA statistics
              and player insights.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl customFontClass">
              Technical Work
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mt-4 ">
              The project first started off as a webscraping project in Python
              where I used Beautiful Soup to parse the HTML content on
              Basketball-Reference and used pandas to merge and clean the data
              into a CSV file. Initially, I tried to find a table that contained
              all 30 NBA teams, however this was not possible so I ended up
              merging and cleaning two different tables for the data. As a
              result, I ended up with data for over 600 NBA players. For the
              frontend, I used Next.js with Tailwind CSS to build a responsive
              and interactive user interface. The backend is powered by a
              PostgreSQL database, and I used Prisma for efficient querying and
              database management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
