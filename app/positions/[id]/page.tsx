import React from "react";

interface pageProps {
  params: { id: string };
}

export default function page({ params }) {
  return <div>Hello {params.id}</div>;
}
