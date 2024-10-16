import { useRef } from "react";

type LettersProps = {
  letters: string[];
  charGuessFunc: (letter: string) => void;
};

const Letters: React.FC<LettersProps> = ({ letters, charGuessFunc }) => {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const clickedFunc = (index: number) => {
    if (refs.current[index]) {
      refs.current[index]!.style.backgroundColor = "#A3A3A3";
      refs.current[index]!.style.color = "gray";
      refs.current[index]!.style.cursor = "not-allowed";
    }
  };

  return (
    <div className="w-full md:w-11/12 lg:w-10/12 xl:w-8/12 h-full md:h-3/6 lg:h-4/6 xl:h-4/6 flex flex-wrap justify-center items-center">
      {letters.map((letter: string, index: number) => (
        <button
          className="keyboard-button"
          key={letter}
          ref={(el) => (refs.current[index] = el)}
          onClick={() => {
            charGuessFunc(letter);
            clickedFunc(index);
          }}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Letters;
