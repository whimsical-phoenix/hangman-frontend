// src/components/Game.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import WordDisplay from "./WordDisplay";
import LetterButtons from "./LetterButtons";

const Game = () => {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  useEffect(() => {
    fetchRandomWord();
  }, []);

  const fetchRandomWord = async () => {
    try {
      const response = await axios.get("/api/game/random");
      setWord(response.data.word.toUpperCase());
    } catch (error) {
      console.error("Error fetching random word:", error);
    }
  };

  const handleLetterClick = (letter) => {
    setGuessedLetters([...guessedLetters, letter]);

    if (!word.includes(letter)) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  };

  const disabledLetters = [
    ...guessedLetters,
    ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
  ];

  return (
    <div className="game-container">
      <h1>Hangman Game</h1>
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <LetterButtons
        onClick={handleLetterClick}
        disabledLetters={disabledLetters}
      />
      <p>Incorrect Guesses: {incorrectGuesses}</p>
    </div>
  );
};

export default Game;
