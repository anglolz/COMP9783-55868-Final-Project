import React, { useState } from "react";
import "./Calculator.css";
// importing the calculator styling from the css page

const Content = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input)); // Processes the calculation
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prev) => prev + value); // Clear button
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input || "0"}</div>
        <div className="result">{result !== "" ? `= ${result}` : ""}</div>
      </div>
      <div className="buttons">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "C",
          "0",
          "=",
          "+",
        ].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className="button is-light"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Content;
