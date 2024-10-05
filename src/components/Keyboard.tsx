import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
  const letters: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const [guessCounter, setGuessCounter] = useState<number>(0);

  const [visibleKeyboard, setVisibleKeyboard] = useState<boolean>(false);

  console.log("word:", splitedWord);

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

  const charGuessFunc = (char: string) => {
    if (char === splitedWord[guessCounter]) {
      setGuess((prevGuess) => {
        const newGuess = [...prevGuess];
        newGuess[guessCounter] = char;
        return newGuess;
      });

      setGuessCounter((prevCounter) => prevCounter + 1);
    }
  };

  return visibleKeyboard ? null : (
    <div className="w-8/12 flex flex-wrap justify-center mt-10 ">
      {letters.map((letter) => (
        <button
          className="keyboard-button "
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
