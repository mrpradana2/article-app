import React, { useEffect, useState } from "react";
import CardArticle from "../home/Card";
import axios from "axios";
import { constants } from "@/configs/constant";

export default function OthersArticle() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${constants.apiURL}/articles`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("failed to fatch data");
        }
        return res.data.data;
      })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        if (err instanceof Error) console.log("[ERROR] : ", err.message);
      });
  }, []);

  return (
    <>
      <section className="flex flex-col gap-y-2">
        <h1 className="font-semibold text-2xl">Other articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.slice(0, 3).map((article) => (
            <CardArticle data={article} key={article.id} />
          ))}
        </div>
      </section>
    </>
  );
}
