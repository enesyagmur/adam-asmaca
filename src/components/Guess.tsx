import { v4 as uuidv4 } from "uuid";

type GuessProps = {
  splitedWord: string[];
  guess: string[];
};
// md:w-[250px] lg:w-[400px] xl:w-[530px]
const Guess: React.FC<GuessProps> = ({ splitedWord, guess }) => {
  return (
    <div className="md:w-[785px] lg:w-[935px] xl:w-9/12 h-[150px] flex flex-col items-center  mt-8 bg-white rounded-xl">
      <div className="w-full h-[80px] flex items-center justify-center">
        {guess.map((char) => (
          <p className="guess-char" key={uuidv4()}>
            {char}
          </p>
        ))}
      </div>
      <div className="w-full h-[20px] flex items-center justify-center mb-3">
        {splitedWord.map(() => (
          <span className="guess-line" key={uuidv4()}></span>
        ))}
      </div>
    </div>
  );
};

export default Guess;
