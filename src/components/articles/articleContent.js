import React from "react";

export default function ArticleContent({ content }) {
  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
