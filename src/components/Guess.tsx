import { v4 as uuidv4 } from "uuid";
import { stateRoot } from "../Redux/store";
import { useSelector } from "react-redux";

type GuessProps = {
  splitedWord: string[];
  guess: string[];
};

const Guess: React.FC<GuessProps> = ({ splitedWord, guess }) => {
  const errorCount = useSelector((state: stateRoot) => state.errorStore.count);

  if (errorCount !== 5) {
    return (
      <div className="w-[350px] md:w-[785px] lg:w-[935px] xl:w-[1190px] h-[50px] md:h-[100px] flex flex-col items-center  mt-8 bg-white rounded-xl">
        <div className="w-full h-[35px] md:h-[50px] flex items-center justify-center md:mt-4">
          {guess.map((char) => (
            <p className="guess-char" key={uuidv4()}>
              {char}
            </p>
          ))}
        </div>
        <div className="w-full h-[15px] md:h-[30px] flex items-center justify-center mb-1 md:mb-3">
          {splitedWord.map(() => (
            <span className="guess-line" key={uuidv4()}></span>
          ))}
        </div>
      </div>
    );
  }
};

export default Guess;
