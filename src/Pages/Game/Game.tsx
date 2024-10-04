import { useState } from "react";
import Hangman from "../../components/hangman/Hangman";
import Guess from "../../components/Guess";
import Keyboard from "../../components/Keyboard";

const Game = () => {
  //   const [randomWord, setRandomWord] = useState(() => {
  //     return words[Math.floor(Math.random() * words.length)];
  //   });
  //   const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-neutral-800 text-white p-0 lg:p-20">
      <Hangman />
      <Guess />
      <Keyboard />
    </div>
  );
};

export default Game;
