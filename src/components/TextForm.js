import React, { useState } from "react";

export default function TextForm({ heading }) {
  const [text, setText] = useState("");

  const convertToUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <>
      <section>
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleChange}
            placeholder="Enter your text here..."
          />
        </div>
        <button className="btn btn-primary" onClick={convertToUpperCase}>
          Convert to Uppercase
        </button>
      </section>

      <section className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {wordCount} {wordCount === 1 ? "word" : "words"} and {charCount}{" "}
          {charCount === 1 ? "character" : "characters"}
        </p>
      </section>
    </>
  );
}
