import { Fragment } from "react";

/** Parte un texto en palabras envueltas para revelarlas con [data-words]. */
export default function Words({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="w">
            <span className="wi">{word}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
