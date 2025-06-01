import React from "react";

// Fungsi render elemen block (paragraph, align)
const renderElement = (element, children) => {
  const style = { textAlign: element.align || "left" };
  switch (element.type) {
    case "paragraph":
    default:
      return (
        <p key={Math.random()} style={style} className="mb-2">
          {children}
        </p>
      );
  }
};

// Fungsi render leaf (bold, italic, dst)
const renderLeaf = (leaf, text) => {
  if (leaf.bold) text = <strong>{text}</strong>;
  if (leaf.italic) text = <em>{text}</em>;
  return text;
};

// Fungsi utama render
const renderNode = (node) => {
  if ("text" in node) {
    return renderLeaf(node, node.text);
  } else if ("type" in node) {
    const children = node.children.map((child, i) => (
      <React.Fragment key={i}>{renderNode(child)}</React.Fragment>
    ));
    return renderElement(node, children);
  }
};

const ArticlePreview = ({ value }) => {
  return (
    <div className="bg-white p-4 border mt-4 rounded">
      {value.map((node, i) => (
        <React.Fragment key={i}>{renderNode(node)}</React.Fragment>
      ))}
    </div>
  );
};

export default ArticlePreview;
