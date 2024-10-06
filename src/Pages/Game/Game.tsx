import Guess from "../../components/Guess";
import Keyboard from "../../components/Keyboard";
import { useSelector } from "react-redux";
import { stateRoot } from "../../Redux/store";
import { useState } from "react";
import bgImage from "../../assets/bg2.jpg";
import Scene from "../../components/scene/Scene";

const Game = () => {
  const splitedWord = useSelector(
    (state: stateRoot) => state.wordStore.splitedWord
  );

  const [guess, setGuess] = useState<string[]>(() => {
    const initialArray: string[] = [];
    for (let i = 0; i < splitedWord.length; i++) {
      initialArray.push("");
    }
    return initialArray;
  });

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      className="w-full h-screen flex flex-col items-center  text-black lg:p-10"
    >
      <div className="w-full xl:w-10/12 h-[1100px] md:h-[500px] flex md:flex-row mt-10 lg:mt-0 flex-col-reverse items-center justify-evenly ">
        <Keyboard guess={guess} setGuess={setGuess} splitedWord={splitedWord} />
        <Scene />
      </div>
      <Guess splitedWord={splitedWord} guess={guess} />
    </div>
  );
};

export default Game;
