import { useEffect } from "react";
import engLetters from "../data/letters/engLetters.json";
import trLetters from "../data/letters/trLetters.json";

import { useDispatch, useSelector } from "react-redux";
import { updateError } from "../Redux/errorSlice";
import { stateRoot } from "../Redux/store";
import { updateResult } from "../Redux/resultSlice";
import Letters from "./Letters";

type KeyboardProps = {
  guess: string[];
  updateGuess: (char: string) => void;
  splitedWord: string[];
};

const Keyboard: React.FC<KeyboardProps> = ({
  guess,
  updateGuess,
  splitedWord,
}) => {
  const errorCount = useSelector((state: stateRoot) => state.errorStore.count);
  const language = useSelector(
    (state: stateRoot) => state.languageStore.language
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (guess.length === splitedWord.length) {
      const isWin = guess.every((value, index) => value === splitedWord[index]);
      if (isWin) {
        dispatch(updateResult(true));
      }
    }
  }, [guess]);

  useEffect(() => {
    if (errorCount === 5) {
      setTimeout(() => {
        dispatch(updateResult(false));
      }, 2500);
    }
  }, [errorCount]);

  const handleError = () => {
    dispatch(updateError());
  };

  const charGuessFunc = (char: string) => {
    if (splitedWord.includes(char)) {
      if (!guess.includes(char)) {
        updateGuess(char);
      }
    } else {
      handleError();
    }
  };

  return errorCount === 5 ? null : (
    <div className="w-[350px] md:w-[250px] lg:w-[400px] xl:w-[530px] h-[120px]  md:h-[500px] mt-2 flex justify-center items-center bg-white rounded-xl z-50 shadow-md shadow-black">
      <Letters
        letters={language === "en" ? engLetters : trLetters}
        charGuessFunc={charGuessFunc}
      />
    </div>
  );
};

export default Keyboard;
