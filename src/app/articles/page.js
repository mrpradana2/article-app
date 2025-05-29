import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ArticlePage() {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <section className="flex flex-col gap-y-2">
        <div>
          <p>{id}</p>
          <h1></h1>
          <p></p>
        </div>
      </section>
    </>
  );
}
