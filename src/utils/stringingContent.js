export function stringingContent(input) {
  let content = "";
  let countCharacters = 0;

  input.forEach((paragraph) => {
    let dynamicText = "";

    paragraph.children.forEach((text) => {
      let textContent = `${text.text}` || "";
      countCharacters += text.text.length;

      if (text.bold) textContent = `<strong>${textContent}</strong>`;
      if (text.italic) textContent = `<em>${textContent}</em>`;

      dynamicText += textContent;
    });

    if (paragraph.align) {
      content += `<p style="text-align: ${paragraph.align};">${dynamicText}</p>`;
    } else {
      content += `<p>${dynamicText}</p>`;
    }
  });

  return [content, countCharacters];
}
