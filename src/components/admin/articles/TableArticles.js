import React from "react";
import RowListArticles from "./RowListArticles";

export default function TableArticles({ data }) {
  return (
    <>
      <section className="overflow-scroll z-20">
        <table className="table-auto border border-gray-300 p-2 w-full">
          <thead className="p-2 text-black">
            <tr className="bg-gray-200">
              <th className="p-2 w-10">Thumbnail</th>
              <th className="p-2 min-w-64">Title</th>
              <th className="p-2 max-w-20">Category</th>
              <th className="p-2 max-w-24 min-w-50">Created at</th>
              <th className="p-2 max-w-[30px]">Action</th>
            </tr>
          </thead>
          <tbody className="p-2 text-slate">
            {data.map((article, index) => (
              <RowListArticles data={article} key={index} index={index} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
