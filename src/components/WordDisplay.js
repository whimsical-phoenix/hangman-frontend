// // src/components/WordDisplay.js

import React from "react";

const WordDisplay = ({ word, guessedLetters }) => {
  return (
    <div className="word-display">
      {word.split("").map((letter, index) => (
        <span
          key={index}
          className={
            guessedLetters.includes(letter) || letter === " " ? "used" : ""
          }>
          {guessedLetters.includes(letter) || letter === " " ? letter : "_ "}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;

// src/components/WordDisplay.js
// import React from "react";

// const WordDisplay = ({ word, guessedLetters }) => {
//   const displayWord = word
//     .split("")
//     .map((letter, index) => (
//       <span key={index}>{guessedLetters.includes(letter) ? letter : "_ "}</span>
//     ));

//   return (
//     <div className="word-display">
//       <p>Number of Letters: {word.length}</p>
//       {displayWord}
//     </div>
//   );
// };

// export default WordDisplay;
