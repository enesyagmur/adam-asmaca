import Hangman from "../../components/hangman/Hangman";
import Guess from "../../components/Guess";
import Keyboard from "../../components/Keyboard";
import { useSelector } from "react-redux";
import { stateRoot } from "../../Redux/store";
import { useState } from "react";

const Game = () => {
  const splitedWord = useSelector(
    (state: stateRoot) => state.wordStore.splitedWord
  );

  const [guess, setGuess] = useState<string[]>(() => {
    const initialArray: string[] = [];
    for (let i = 0; i < splitedWord.length; i++) {
      initialArray.push("");
    }
    return initialArray;
  });

  return (
    <div className="w-full h-screen flex flex-col items-center bg-neutral-800 text-white p-0 lg:p-20">
      <Hangman />
      <Guess splitedWord={splitedWord} guess={guess} />
      <Keyboard guess={guess} setGuess={setGuess} splitedWord={splitedWord} />
    </div>
  );
};

export default Game;
