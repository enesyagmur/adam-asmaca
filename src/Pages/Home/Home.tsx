import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewRandomWord } from "../../Redux/wordSlice";
import { useState } from "react";
import bgImage from "../../assets/bg2.jpg";
import text from "../../data/languageText/textForHome.json";

import { stateRoot } from "../../Redux/store";
import Languages from "../../components/Languages";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mode, setMode] = useState<boolean[]>([false, false, false]);
  const language = useSelector(
    (state: stateRoot) => state.languageStore.language
  );

  const startGame = async () => {
    if (mode[0] === true) {
      await dispatch(createNewRandomWord("easy"));
    } else if (mode[1] === true) {
      await dispatch(createNewRandomWord("normal"));
    } else if (mode[2] === true) {
      await dispatch(createNewRandomWord("hard"));
    }
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
      className="w-full h-screen flex flex-col items-center justify-center  text-blue-400 "
    >
      <div className="w-10/12 lg:w-6/12 h-5/6 lg:h-4/6 flex flex-col items-center justify-evenly relative bg-white text-black rounded-2xl">
        <p className="w-full text-4xl md:text-6xl lg:mb-20 capitalize bg-white text-blue-400 font-bold text-center">
          {language === "en" ? text.title.en : text.title.tr}
        </p>
        <Languages />
        <div className="w-full h-80 md:h-40 flex flex-col md:flex-row justify-evenly items-center">
          <div
            className={`home-mode-button ${
              mode[0] ? "bg-blue-400 text-white" : null
            } group`}
            onClick={() => modeChange("easy")}
          >
            <p className="text-xl md:text-3xl font-bold capitalize">
              {language === "en" ? text.button1Level.en : text.button1Level.tr}
            </p>
            <p className="text-sm mt-2 text-blue-500 group-hover:text-black">
              4 {language === "en" ? text.buttonInfo.en : text.buttonInfo.tr}
            </p>
          </div>

          <div
            className={`home-mode-button ${
              mode[1] ? "bg-blue-400 text-white" : null
            } group`}
            onClick={() => modeChange("normal")}
          >
            <p className="text-xl md:text-3xl font-bold capitalize">
              {language === "en" ? text.button2Level.en : text.button2Level.tr}
            </p>
            <p className="text-sm mt-2 text-blue-500 group-hover:text-black">
              5 {language === "en" ? text.buttonInfo.en : text.buttonInfo.tr}
            </p>
          </div>

          <div
            className={`home-mode-button ${
              mode[2] ? "bg-blue-400 text-white" : null
            } group`}
            onClick={() => modeChange("hard")}
          >
            <p className="text-xl md:text-3xl font-bold capitalize">
              {language === "en" ? text.button3Level.en : text.button3Level.tr}
            </p>
            <p className="text-sm mt-2 text-blue-500 group-hover:text-black">
              6 {language === "en" ? text.buttonInfo.en : text.buttonInfo.tr}
            </p>
          </div>
        </div>
        <button
          onClick={startGame}
          className={`w-10/12 md:w-[200px] h-[60px] md:h-[50px] capitalize font-bold rounded-xl text-black ${
            mode[0] === true || mode[1] === true || mode[2] === true
              ? "bg-blue-400 text-white cursor-pointer"
              : "bg-neutral-400 cursor-no-drop "
          } text-center m-1 md:mt-10 `}
        >
          {language === "en" ? text.gameButton.en : text.gameButton.tr}
        </button>
      </div>
    </div>
  );
};

export default Home;
