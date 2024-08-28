import React from "react";
import Navbar from "@/app/components/Navbar";

interface pageProps {
  params: { id: string };
}

export default function page({ params }: pageProps) {
  return (
    <div>
      <Navbar />
      Hello {params.id}
    </div>
  );
}
