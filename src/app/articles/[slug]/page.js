"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { constants } from "@/configs/constant";
import Article from "@/components/articles/article";
import OthersArticle from "@/components/articles/othersArticle";

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug;
  const [data, setdata] = useState(null);
  console.log("data", data);

  useEffect(() => {
    axios
      .get(`${constants.apiURL}/articles/${slug}`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("failed to fatch data article");
        }
        return res;
      })
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        if (err instanceof Error) console.log(err.message);
      });
  }, []);

  return (
    <>
      <section className="flex flex-col gap-y-2 px-5 md:px-16">
        <Article data={data} />
        <OthersArticle />
      </section>
    </>
  );
}
