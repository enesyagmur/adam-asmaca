import Hangman from "../../components/hangman/Hangman";
import Guess from "../../components/Guess";
import Keyboard from "../../components/Keyboard";
import { useSelector } from "react-redux";
import { stateRoot } from "../../Redux/store";
import { useState } from "react";

const Game = () => {
  const sipletedWord = useSelector(
    (state: stateRoot) => state.wordStore.sipletedWord
  );

  const [guess, setGuess] = useState<string[]>(() => {
    const initialArray: string[] = [];
    for (let i = 0; i < sipletedWord.length; i++) {
      initialArray.push("");
    }
    return initialArray;
  });

  return (
    <div className="w-full h-screen flex flex-col items-center bg-neutral-800 text-white p-0 lg:p-20">
      <Hangman />
      <Guess sipletedWord={sipletedWord} guess={guess} />
      <Keyboard guess={guess} setGuess={setGuess} />
    </div>
  );
};

export default Game;
