"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug;

  return (
    <>
      <section className="flex flex-col gap-y-2">
        <div>
          <p>{slug}</p>
          <h1></h1>
          <p></p>
        </div>
      </section>
    </>
  );
}
