import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ArticlePage() {
  const router = useRouter();
  const { slug } = router.query;

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
