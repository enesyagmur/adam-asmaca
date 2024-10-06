import { useNavigate } from "react-router-dom";
import easyWords from "../../data/easyWords.json";
import normalWords from "../../data/normalWords.json";
import hardWords from "../../data/hardWords.json";
import { useDispatch } from "react-redux";
import { updateWord } from "../../Redux/wordSlice";
import { useState } from "react";
import bgImage from "../../assets/bg2.jpg";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mode, setMode] = useState<boolean[]>([false, false, false]);

  const createRandomWord = () => {
    if (mode[0] === true) {
      const word: string =
        easyWords[Math.floor(Math.random() * easyWords.length)];
      const splitedWord: string[] = word.split("");
      return splitedWord;
    } else if (mode[1] === true) {
      const word: string =
        normalWords[Math.floor(Math.random() * normalWords.length)];
      const splitedWord: string[] = word.split("");
      return splitedWord;
    } else if (mode[2] === true) {
      const word: string =
        hardWords[Math.floor(Math.random() * hardWords.length)];
      const splitedWord: string[] = word.split("");
      return splitedWord;
    }
  };

  const startGame = async () => {
    await dispatch(updateWord(createRandomWord()));
    navigate("/game");
  };

  const modeChange = (mode: string) => {
    if (mode === "easy") {
      setMode([true, false, false]);
    } else if (mode === "normal") {
      setMode([false, true, false]);
    } else if (mode === "hard") {
      setMode([false, false, true]);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      className="w-full h-screen flex flex-col items-center justify-center  text-blue-500"
    >
      <div className="w-6/12 h-4/6 flex flex-col items-center justify-evenly bg-white rounded-2xl">
        <p className="w-full text-6xl mb-20 capitalize bg-white text-blue-500 font-bold text-center">
          adam asmaca
        </p>

        <div className="w-full h-40 flex justify-evenly items-center">
          <div
            className={`home-mode-button ${
              mode[0] ? "bg-white text-neutral-800" : null
            }`}
            onClick={() => modeChange("easy")}
          >
            <p className=" text-3xl font-bold capitalize">easy</p>
            <p className="text-sm mt-2 text-blue-500">4 char</p>
          </div>

          <div
            className={`home-mode-button ${
              mode[1] ? "bg-neutral-300 text-neutral-800" : null
            }`}
            onClick={() => modeChange("normal")}
          >
            <p className="text-3xl font-bold capitalize">normal</p>
            <p className="text-sm mt-2 text-blue-500">5 char</p>
          </div>

          <div
            className={`home-mode-button ${
              mode[2] ? "bg-neutral-300 text-neutral-800" : null
            }`}
            onClick={() => modeChange("hard")}
          >
            <p className="text-3xl font-bold capitalize">hard</p>
            <p className="text-sm mt-2 text-blue-500">6 char</p>
          </div>
        </div>
        <button
          onClick={startGame}
          className="w-[200px] h-[50px] capitalize font-bold bg-transparent rounded-xl border-2 bg-white border-blue-400 text-black text-center m-1 mt-10 hover:bg-neutral-300 hover:text-neutral-800"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Home;
