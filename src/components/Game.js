// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import WordDisplay from "./WordDisplay";
// import LetterButtons from "./LetterButtons";

// const Game = () => {
//   const [word, setWord] = useState("");
//   const [guessedLetters, setGuessedLetters] = useState([]);
//   const [incorrectGuesses, setIncorrectGuesses] = useState(0);

//   useEffect(() => {
//     fetchRandomWord();
//   }, []);

//   const fetchRandomWord = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/game/random");

//       if (!response.data || !response.data.word) {
//         console.error("Invalid response format:", response.data);
//         return;
//       }

//       setWord(response.data.word.toUpperCase());
//     } catch (error) {
//       console.error("Error fetching random word:", error);
//     }
//   };

//   const handleLetterClick = (letter) => {
//     setGuessedLetters([...guessedLetters, letter]);

//     if (!word.includes(letter)) {
//       setIncorrectGuesses(incorrectGuesses + 1);
//     }
//   };

//   const handleRefreshClick = () => {
//     setWord("");
//     setGuessedLetters([]);
//     setIncorrectGuesses(0);
//     fetchRandomWord();
//   };

//   const disabledLetters = [
//     ...guessedLetters,
//     ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
//   ];

//   const getHangmanFigure = () => {
//     const maxIncorrectGuesses = 6;
//     const hangmanFigures = [
//       `
//         -----
//         |   |
//             |
//             |
//             |
//             |
//       ---------
//       `,
//       `
//         -----
//         |   |
//         O   |
//             |
//             |
//             |
//       ---------
//       `,
//       `
//         -----
//         |   |
//         O   |
//         |   |
//             |
//             |
//       ---------
//       `,
//       `
//         -----
//         |   |
//         O   |
//        /|   |
//             |
//             |
//       ---------
//       `,
//       `
//         -----
//         |   |
//         O   |
//        /|\\  |
//             |
//             |
//       ---------
//       `,
//       `
//         -----
//         |   |
//         O   |
//        /|\\  |
//        /    |
//             |
//       ---------
//       `,
//       `
//         -----
//         |   |
//         O   |
//        /|\\  |
//        / \\  |
//             |
//       ---------
//       `,
//     ];
//     return hangmanFigures
//       .slice(0, Math.min(incorrectGuesses, maxIncorrectGuesses) + 1)
//       .join("\n");
//   };

//   const isGameWon = () => {
//     const uniqueLetters = new Set(word);
//     const guessedUniqueLetters = new Set(guessedLetters);
//     return (
//       [...uniqueLetters].filter((letter) => guessedUniqueLetters.has(letter))
//         .length === uniqueLetters.size
//     );
//   };

//   const isGameLost = () => incorrectGuesses >= 6;

//   return (
//     <div className="game-container">
//       <h1>Hangman Game</h1>
//       <pre>{getHangmanFigure()}</pre>
//       <WordDisplay word={word} guessedLetters={guessedLetters} />
//       <LetterButtons
//         onClick={handleLetterClick}
//         disabledLetters={disabledLetters}
//       />
//       <button onClick={handleRefreshClick}>New Word</button>
//       {isGameWon() && (
//         <p className="win-message">Congratulations! You've won!</p>
//       )}
//       {isGameLost() && (
//         <p className="lose-message">
//           Sorry! You've lost. The correct word was "{word}".
//         </p>
//       )}
//       <p>Incorrect Guesses: {incorrectGuesses}</p>
//     </div>
//   );
// };

// export default Game;

// src/components/Game.js (keyboard)
import React, { useState, useEffect } from "react";
import axios from "axios";
import WordDisplay from "./WordDisplay";

const Game = () => {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  useEffect(() => {
    fetchRandomWord();
  }, []);

  const fetchRandomWord = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/game/random");

      if (!response.data || !response.data.word) {
        console.error("Invalid response format:", response.data);
        return;
      }

      setWord(response.data.word.toUpperCase());
    } catch (error) {
      console.error("Error fetching random word:", error);
    }
  };

  const handleKeyDown = (event) => {
    const letter = event.key.toUpperCase();

    if (/^[A-Z]$/.test(letter) && !guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);

      if (!word.includes(letter)) {
        setIncorrectGuesses(incorrectGuesses + 1);
      }
    }
  };
  const handleRefreshClick = () => {
    setWord("");
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    fetchRandomWord();
  };

  const getHangmanFigure = () => {
    const maxIncorrectGuesses = 6;
    const hangmanFigures = [
      `
            -----
            |   |
                |
                |
                |
                |
          ---------
          `,
      `
            -----
            |   |
            O   |
                |
                |
                |
          ---------
          `,
      `
            -----
            |   |
            O   |
            |   |
                |
                |
          ---------
          `,
      `
            -----
            |   |
            O   |
           /|   |
                |
                |
          ---------
          `,
      `
            -----
            |   |
            O   |
           /|\\  |
                |
                |
          ---------
          `,
      `
            -----
            |   |
            O   |
           /|\\  |
           /    |
                |
          ---------
          `,
      `
            -----
            |   |
            O   |
           /|\\  |
           / \\  |
                |
          ---------
          `,
    ];
    return hangmanFigures
      .slice(0, Math.min(incorrectGuesses, maxIncorrectGuesses) + 1)
      .join("\n");
  };

  const isGameWon = () => {
    const uniqueLetters = new Set(word);
    return (
      [...guessedLetters].filter((letter) => uniqueLetters.has(letter))
        .length === uniqueLetters.size
    );
  };

  const isGameLost = () => incorrectGuesses >= 6;

  return (
    <div className="game-container" tabIndex="0" onKeyDown={handleKeyDown}>
      <h1>Hangman Game</h1>
      <pre>{getHangmanFigure()}</pre>
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <button onClick={handleRefreshClick}>New Word</button>
      {isGameWon() && (
        <p className="win-message">Congratulations! You've won!</p>
      )}
      {isGameLost() && (
        <p className="lose-message">
          Sorry! You've lost. The correct word was "{word}".
        </p>
      )}
      <p>Incorrect Guesses: {incorrectGuesses}</p>
    </div>
  );
};

export default Game;
