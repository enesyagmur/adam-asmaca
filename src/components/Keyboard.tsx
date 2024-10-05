import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type KeyboardProps = {
  guess: string[];
  setGuess: React.Dispatch<React.SetStateAction<string[]>>;
};

const Keyboard: React.FC<KeyboardProps> = ({ guess, setGuess }) => {
  const letters: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const [guessCounter, setGuessCounter] = useState<number>(0);

  const [visibleKeyboard, setVisibleKeyboard] = useState<boolean>(false);

  const charGuessFunc = (char: string) => {
    setGuess((prevGuess) => [...prevGuess.slice(0, guessCounter), char]);
    setGuessCounter(guessCounter + 1);
  };

  return visibleKeyboard ? null : (
    <div className="w-8/12 flex flex-wrap justify-center mt-10 ">
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
