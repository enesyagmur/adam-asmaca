import Guess from "../../components/Guess";
import Keyboard from "../../components/Keyboard";
import { useSelector } from "react-redux";
import { stateRoot } from "../../Redux/store";
import { useState } from "react";
import bgImage from "../../assets/bg2.jpg";
import Scene from "../../components/scene/Scene";
import Result from "../../components/Result";

const Game = () => {
  const splitedWord = useSelector(
    (state: stateRoot) => state.wordStore.splitedWord
  );

  const result = useSelector((state: stateRoot) => state.resultStore.result);

  const [guess, setGuess] = useState<string[]>(() => {
    const initialArray: string[] = [];
    for (let i = 0; i < splitedWord.length; i++) {
      initialArray.push("");
    }
    return initialArray;
  });

  console.log(splitedWord);

  if (result === null) {
    return (
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
        className="w-full md:h-screen flex flex-col-reverse md:flex-col items-center  text-black lg:p-10 relative"
      >
        <div className="w-full lg:w-12/12  xl:w-11/12  h-[655px] md:h-[500px] flex md:flex-row md:mt-10 lg:mt-0 flex-col-reverse items-center justify-evenly">
          <Keyboard
            guess={guess}
            setGuess={setGuess}
            splitedWord={splitedWord}
          />
          <Scene />
        </div>
        <Guess splitedWord={splitedWord} guess={guess} />
      </div>
    );
  } else if (result !== null) {
    return (
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
        className="w-full h-screen flex items-center justify-center"
      >
        <Result setGuess={setGuess} />
      </div>
    );
  }
};

export default Game;
