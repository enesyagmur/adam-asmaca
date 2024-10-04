import { useNavigate } from "react-router-dom";
import wordList from "../../data/wordList.json";
import { useDispatch } from "react-redux";
import { updateWord } from "../../Redux/wordSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createRandomWord = () => {
    const word: string = wordList[Math.floor(Math.random() * wordList.length)];
    const splitedWord: string[] = word.split("");
    return splitedWord;
  };

  const startGame = async () => {
    await dispatch(updateWord(createRandomWord()));
    navigate("/game");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-neutral-800 text-neutral-300">
      <button
        onClick={startGame}
        className="w-[80px] h-[50px] font-bold bg-transparent rounded-xl border-2 text-neutral-300 border-neutral-300 text-center m-1 hover:bg-neutral-300 hover:text-neutral-800"
      >
        Start
      </button>
    </div>
  );
};

export default Home;
