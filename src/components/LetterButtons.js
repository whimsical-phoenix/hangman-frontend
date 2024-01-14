// src/components/LetterButtons.js
import React from "react";

const LetterButtons = ({ onClick, disabledLetters }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="letter-buttons">
      {alphabet.split("").map((letter, index) => (
        <button
          key={index}
          onClick={() => onClick(letter)}
          disabled={disabledLetters.includes(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default LetterButtons;
