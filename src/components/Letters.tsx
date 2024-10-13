type LettersProps = {
  letters: string[];
  charGuessFunc: (letter: string) => void;
};

const Letters: React.FC<LettersProps> = ({ letters, charGuessFunc }) => {
  return (
    <div className="w-full md:w-11/12 lg:w-10/12 xl:w-8/12 h-full md:h-3/6 lg:h-4/6 xl:h-4/6 flex flex-wrap justify-center items-center">
      {letters.map((letter: string) => (
        <button
          className="keyboard-button"
          key={letter}
          onClick={() => charGuessFunc(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Letters;
