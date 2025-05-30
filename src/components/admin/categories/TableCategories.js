import React from "react";
import RowListCategories from "./RowListCategories";

export default function TableCategories({ data }) {
  console.log("categories", data);
  return (
    <>
      <section className="overflow-scroll z-20">
        <table className="table-auto border border-gray-300 p-2 w-full">
          <thead className="p-2 text-black">
            <tr className="bg-gray-200">
              <th className="p-2">Category</th>
              <th className="p-2">Created at</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody className="p-2 text-slate">
            {data.map((category, index) => (
              <RowListCategories data={category} key={index} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
