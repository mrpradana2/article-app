"use client";
import React, { useCallback, useMemo, useState } from "react";
import { createEditor, Transforms, Editor, Text } from "slate";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import { withHistory } from "slate-history";
import classNames from "classnames";
import {
  Bold,
  Italic,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo2,
  Redo,
  AlignJustify,
} from "lucide-react";

const TextArea = ({ value, onChange }) => {
  const initialValue = useMemo(
    () => [
      {
        type: "paragraph",
        children: [{ text: "Type a content..." }],
      },
    ],
    []
  );

  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  return (
    <div className="w-full mx-auto flex flex-col">
      <Slate
        editor={editor}
        initialValue={initialValue}
        value={value}
        onChange={onChange}
      >
        <Toolbar />
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={(event) => {
            if (event.ctrlKey) {
              switch (event.key) {
                case "b":
                  event.preventDefault();
                  toggleMark(editor, "bold");
                  break;
                case "i":
                  event.preventDefault();
                  toggleMark(editor, "italic");
                  break;
              }
            }
          }}
          className="border mt-2 min-h-[200px] p-4"
        />
      </Slate>
    </div>
  );
};

const Toolbar = () => {
  const editor = useSlate();

  return (
    <div className="flex flex-wrap gap-2 border border-gray-300 p-2 rounded-md bg-white">
      <Button onClick={() => editor.undo()}>
        <Undo2 size={16} />
      </Button>
      <Button onClick={() => editor.redo()}>
        <Redo size={16} />
      </Button>
      <Button
        onClick={() => toggleMark(editor, "bold")}
        active={isMarkActive(editor, "bold")}
      >
        <Bold size={16} />
      </Button>
      <Button
        onClick={() => toggleMark(editor, "italic")}
        active={isMarkActive(editor, "italic")}
      >
        <Italic size={16} />
      </Button>
      <Button
        onClick={() => setAlignment(editor, "left")}
        active={isAlignActive(editor, "left")}
      >
        <AlignLeft size={16} />
      </Button>
      <Button
        onClick={() => setAlignment(editor, "center")}
        active={isAlignActive(editor, "center")}
      >
        <AlignCenter size={16} />
      </Button>
      <Button
        onClick={() => setAlignment(editor, "right")}
        active={isAlignActive(editor, "right")}
      >
        <AlignRight size={16} />
      </Button>
      <Button
        onClick={() => setAlignment(editor, "justify")}
        active={isAlignActive(editor, "justify")}
      >
        <AlignJustify size={16} />
      </Button>
    </div>
  );
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) Editor.removeMark(editor, format);
  else Editor.addMark(editor, format, true);
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const setAlignment = (editor, alignment) => {
  Transforms.setNodes(
    editor,
    { align: alignment },
    { match: (n) => Editor.isBlock(editor, n) }
  );
};

const isAlignActive = (editor, alignment) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n.align === alignment,
  });
  return !!match;
};

const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align || "left" };
  return (
    <p style={style} {...attributes} className="mb-2">
      {children}
    </p>
  );
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.italic) children = <em>{children}</em>;
  return <span {...attributes}>{children}</span>;
};

const Button = ({ active, children, ...props }) => {
  return (
    <button
      {...props}
      className={classNames(
        "p-1 cursor-pointer rounded hover:bg-blue-200",
        active ? "text-primary font-bold" : ""
      )}
    >
      {children}
    </button>
  );
};

export default TextArea;
