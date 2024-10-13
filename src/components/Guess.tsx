import { v4 as uuidv4 } from "uuid";

import { AiOutlineInfo } from "react-icons/ai";
import { useState } from "react";

type GuessProps = {
  splitedWord: string[];
  guess: string[];

  helpButtonFunc: () => void;
};

const Guess: React.FC<GuessProps> = ({
  splitedWord,
  guess,
  helpButtonFunc,
}) => {
  const [helpButtonClickCheck, setHelpButtonClickCheck] =
    useState<boolean>(false);

  return (
    <div className="w-[350px] md:w-[785px] lg:w-[935px] xl:w-[1190px] h-[50px] md:h-[100px] flex flex-col items-center  mt-8 bg-white rounded-xl relative">
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
      <button
        className={`w-[15px] h-[15px] sm:w-[40px] sm:h-[40px] flex items-center text-2xl font-bold justify-center rounded-full bg-blue-400 text-white cursor-pointer hover:bg-yellow-400 right-1 sm:left-[370px] md:right-4 absolute top-1 sm:mt-[5px] md:mt-[30px]
          ${helpButtonClickCheck ? "pointer-events-none bg-gray-400" : null}
          `}
      >
        <AiOutlineInfo
          className=""
          onClick={() => {
            setHelpButtonClickCheck(true);
            helpButtonFunc();
          }}
        />
      </button>
    </div>
  );
};

export default Guess;
