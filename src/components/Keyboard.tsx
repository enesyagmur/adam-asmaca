import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import letters from "../data/letters.json";
import { useDispatch, useSelector } from "react-redux";
import { updateError } from "../Redux/errorSlice";
import { stateRoot } from "../Redux/store";

type KeyboardProps = {
  guess: string[];
  setGuess: React.Dispatch<React.SetStateAction<string[]>>;
  splitedWord: string[];
};

const Keyboard: React.FC<KeyboardProps> = ({
  guess,
  setGuess,
  splitedWord,
}) => {
  const [guessCounter, setGuessCounter] = useState<number>(0);
  const errorCount = useSelector((state: stateRoot) => state.errorStore.count);
  const [visibleKeyboard, setVisibleKeyboard] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      guess.length === splitedWord.length &&
      guess.every((value, index) => value === splitedWord[index])
    ) {
      setTimeout(() => {
        setVisibleKeyboard(true);
        alert("kazandın");
      }, 100);
    }
  }, [guess]);

  useEffect(() => {
    if (errorCount === 5) {
      setTimeout(() => {
        setVisibleKeyboard(true);
        alert("kaybettin");
      }, 100);
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

  return visibleKeyboard ? null : (
    <div className="w-8/12 flex flex-wrap justify-center mt-10">
      {letters.map((letter) => (
        <button
          className="keyboard-button"
          key={uuidv4()}
          onClick={() => charGuessFunc(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
