import { useDispatch, useSelector } from "react-redux";
import { stateRoot } from "../Redux/store";
import { AiFillHome } from "react-icons/ai";
import { FaRepeat } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { resetError } from "../Redux/errorSlice";
import { updateResult } from "../Redux/resultSlice";
import { FaFaceSmile } from "react-icons/fa6";
import { FaFaceDizzy } from "react-icons/fa6";
import { createNewRandomWord } from "../Redux/wordSlice";
import text from "../data/languageText/textForResult.json";

type ResultProps = {
  setGuess: React.Dispatch<React.SetStateAction<string[]>>;
};

const Result: React.FC<ResultProps> = ({ setGuess }) => {
  const result = useSelector((state: stateRoot) => state.resultStore.result);
  const splitedWord = useSelector(
    (state: stateRoot) => state.wordStore.splitedWord
  );
  const language = useSelector(
    (state: stateRoot) => state.languageStore.language
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goHome = () => {
    navigate("/");
    dispatch(resetError());
    dispatch(updateResult(null));
  };

  const restartGame = () => {
    if (language === "en") {
      if (splitedWord.length === 4) {
        dispatch(createNewRandomWord("easy"));
        setGuess(["", "", "", ""]);
      } else if (splitedWord.length === 5) {
        dispatch(createNewRandomWord("medium"));
        setGuess(["", "", "", "", ""]);
      } else if (splitedWord.length === 6) {
        dispatch(createNewRandomWord("hard"));
        setGuess(["", "", "", "", "", ""]);
      }
    } else if (language === "tr") {
      if (splitedWord.length === 4) {
        dispatch(createNewRandomWord("kolay"));
        setGuess(["", "", "", ""]);
      } else if (splitedWord.length === 5) {
        dispatch(createNewRandomWord("orta"));
        setGuess(["", "", "", "", ""]);
      } else if (splitedWord.length === 6) {
        dispatch(createNewRandomWord("zor"));
        setGuess(["", "", "", "", "", ""]);
      }
    }

    dispatch(resetError());
    dispatch(updateResult(null));
  };

  if (result === true) {
    return (
      <div className="w-10/12 sm:w-8/12 lg:w-6/12 h-4/6 sm:h-3/6 bg-white flex flex-col items-center justify-between text-black rounded-xl">
        <div className="w-full h-2/6 bg-green-500 relative text-4xl font-bold uppercase flex items-center justify-center rounded-t-xl">
          <p className="">
            {language === "en" ? text.titleWon.en : text.titleWon.tr}
          </p>
          <FaFaceSmile className="absolute left-[90%]" />
        </div>

        <div className="w-full h-2/6 flex items-center justify-center pt-6">
          <p> {language === "en" ? text.wordInfo.en : text.wordInfo.tr}|</p>
          <p className="text-xl font-bold uppercase ml-1">
            {splitedWord.join("")}
          </p>
        </div>
        <div className="w-7/12 md:w-4/12 h-2/6 flex items-center justify-evenly  text-6xl">
          <FaRepeat className="cursor-pointer hover:text-neutral-400" />
          <AiFillHome
            className="cursor-pointer hover:text-neutral-400"
            onClick={goHome}
          />
        </div>
      </div>
    );
  } else if (result === false) {
    return (
      <div className="w-10/12 sm:w-8/12 lg:w-6/12 h-4/6 sm:h-3/6 bg-white flex flex-col items-center justify-between text-black rounded-xl">
        <div className="w-full h-2/6 bg-red-500 text-4xl font-bold uppercase flex items-center justify-center rounded-t-xl relative">
          <p className="">
            {language === "en" ? text.titleLose.en : text.titleLose.tr}
          </p>
          <FaFaceDizzy className="absolute left-[90%]" />
        </div>
        <div className="w-full h-2/6 flex items-center justify-center pt-6">
          <p>{language === "en" ? text.wordInfo.en : text.wordInfo.tr} |</p>
          <p className="text-xl font-bold uppercase ml-1">
            {splitedWord.join("")}
          </p>
        </div>
        <div className="w-7/12 md:w-4/12 h-2/6 flex items-center justify-evenly  text-6xl">
          <FaRepeat
            className="cursor-pointer hover:text-neutral-400"
            onClick={restartGame}
          />
          <AiFillHome
            className="cursor-pointer hover:text-neutral-400"
            onClick={goHome}
          />
        </div>
      </div>
    );
  }
};

export default Result;
