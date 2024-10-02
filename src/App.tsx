import { useState } from "react";
import "./App.css";
import words from "./wordList.json";
import Result from "./components/Result";

import Keyboard from "./components/Keyboard";
import Hangman from "./components/hangman/Hangman";
import Guess from "./components/Guess";

function App() {
  const [wordToGuess, SetWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-neutral-800 text-white p-0 lg:p-20">
      <Result />
      <Hangman />
      <Guess />
      <Keyboard />
    </div>
  );
}

export default App;
