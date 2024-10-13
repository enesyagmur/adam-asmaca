import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import engLetters from "../data/letters/engLetters.json";
import trLetters from "../data/letters/trLetters.json";

import { useDispatch, useSelector } from "react-redux";
import { updateError } from "../Redux/errorSlice";
import { stateRoot } from "../Redux/store";
import { updateResult } from "../Redux/resultSlice";

type KeyboardProps = {
  guess: string[];
  setGuess: React.Dispatch<React.SetStateAction<string[]>>;
  guessCounter: number;
  setGuessCounter: React.Dispatch<React.SetStateAction<number>>;
  splitedWord: string[];
};

const Keyboard: React.FC<KeyboardProps> = ({
  guess,
  setGuess,
  guessCounter,
  setGuessCounter,
  splitedWord,
}) => {
  const errorCount = useSelector((state: stateRoot) => state.errorStore.count);
  const language = useSelector(
    (state: stateRoot) => state.languageStore.language
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      guess.length === splitedWord.length &&
      guess.every((value, index) => value === splitedWord[index])
    ) {
      setTimeout(() => {
        dispatch(updateResult(true));
      }, 1000);
    }
  }, [guess]);

  useEffect(() => {
    if (errorCount === 5) {
      setTimeout(() => {
        dispatch(updateResult(false));
      }, 1000);
    }
  }, [errorCount]);

  const charGuessFunc = (char: string) => {
    if (char === splitedWord[guessCounter]) {
      setGuess((prevGuess) => {
        const newGuess = [...prevGuess];
        newGuess[guessCounter] = char;
        return newGuess;
      });
      setGuessCounter((prevCounter) => prevCounter + 1);
    } else {
      dispatch(updateError());
    }
  };

  return (
    <div className="w-[350px] md:w-[250px] lg:w-[400px] xl:w-[530px] h-[120px]  md:h-[500px] mt-2 flex justify-center items-center bg-white rounded-xl z-50">
      <div className="w-full md:w-11/12 lg:w-10/12 xl:w-8/12 h-full md:h-3/6 lg:h-4/6 xl:h-4/6 flex flex-wrap justify-center items-center">
        {language === "en"
          ? engLetters.map((letter) => (
              <button
                className="keyboard-button"
                key={uuidv4()}
                onClick={() => charGuessFunc(letter)}
              >
                {letter}
              </button>
            ))
          : trLetters.map((letter) => (
              <button
                className="keyboard-button"
                key={uuidv4()}
                onClick={() => charGuessFunc(letter)}
              >
                {letter}
              </button>
            ))}
      </div>
    </div>
  );
};

export default Keyboard;
