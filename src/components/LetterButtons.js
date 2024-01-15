// // src/components/LetterButtons.js
// import React from "react";

// const LetterButtons = ({ onClick, disabledLetters }) => {
//   const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   const handleButtonClick = (letter) => {
//     console.log(`Button clicked: ${letter}`);
//     onClick(letter);
//   };

//   return (
//     <div className="letter-buttons">
//       {alphabet.split("").map((letter, index) => (
//         <button
//           key={index}
//           onClick={() => handleButtonClick(letter)}
//           disabled={disabledLetters.includes(letter.toUpperCase())}>
//           {letter}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default LetterButtons;

// // src/components/LetterButtons.js
// src/components/LetterButtons.js
import React from "react";

const LetterButtons = ({ onClick, disabledLetters }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleButtonClick = (letter) => {
    console.log(`Clicked letter: ${letter}`);
    onClick(letter);
  };

  return (
    <div className="letter-buttons">
      {alphabet.split("").map((letter, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(letter)}
          disabled={disabledLetters.includes(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default LetterButtons;
