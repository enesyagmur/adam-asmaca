import { v4 as uuidv4 } from "uuid";

type GuessProps = {
  sipletedWord: string[];
  guess: string[];
};

const Guess: React.FC<GuessProps> = ({ sipletedWord, guess }) => {
  console.log("gues componentinde: ", guess);

  return (
    <div className="w-full h-[100px] flex flex-col items-center justify-between mt-8">
      <div className="w-full h-[80px] flex items-center justify-center">
        {sipletedWord.map(() => (
          <p className="guess-char" key={uuidv4()}></p>
        ))}
      </div>
      <div className="w-full h-[20px] flex items-center justify-center">
        {sipletedWord.map(() => (
          <span className="guess-line" key={uuidv4()}></span>
        ))}
      </div>
    </div>
  );
};

export default Guess;
