import { useState } from "react";
import "./App.css";
import words from "./wordList.json";

function App() {
  const [wordToGuess, SetWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string>([]);

  console.log(wordToGuess);

  return <div className="w-full h-screen bg-neutral-800 text-white">Hello</div>;
}

export default App;
