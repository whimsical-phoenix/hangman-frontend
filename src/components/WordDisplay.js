// src/components/WordDisplay.js
import React from "react";

const WordDisplay = ({ word, guessedLetters }) => {
  const displayWord = word
    .split("")
    .map((letter, index) => (
      <span key={index}>{guessedLetters.includes(letter) ? letter : "_"}</span>
    ));

  return <div className="word-display">{displayWord}</div>;
};

export default WordDisplay;
