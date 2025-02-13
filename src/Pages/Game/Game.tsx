import Guess from "../../components/Guess";
import Keyboard from "../../components/Keyboard";
import { useSelector } from "react-redux";
import { stateRoot } from "../../Redux/store";
import { useEffect, useMemo, useState } from "react";
import bgImage from "../../assets/bg2.jpg";
import Scene from "../../components/scene/Scene";
import Result from "../../components/Result";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const navigate = useNavigate();
  const splitedWord = useSelector(
    (state: stateRoot) => state.wordStore.splitedWord
  );
  const result = useSelector((state: stateRoot) => state.resultStore.result);

  const initialGuess = useMemo(() => {
    return Array(splitedWord.length).fill("");
  }, [splitedWord.length]);

  const [guess, setGuess] = useState<string[]>(initialGuess);

  const updateGuess = (char: string) => {
    const indexArray: number[] = splitedWord
      .map((x, index) => (x === char ? index : -1))
      .filter((index) => index !== -1);

    for (let i = 0; i < indexArray.length; i++) {
      setGuess((prevGuess) => {
        const newGuess = [...prevGuess];
        newGuess[indexArray[i]] = char;
        return newGuess;
      });
    }
  };

  const revealNextLetter = () => {
    const findNullIndex = guess.findIndex((x) => x === "");
    const findChar = splitedWord[findNullIndex];
    updateGuess(findChar);
  };

  useEffect(() => {
    if (splitedWord.length <= 0) {
      navigate("/");
    }
  }, [splitedWord]);

  const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "object-cover",
    backgroundRepeat: "repeat",
  };

  if (result === null && splitedWord.length > 0) {
    return (
      <div
        style={backgroundStyle}
        className="w-full h-screen flex flex-col-reverse md:flex-col items-center  text-black lg:p-10 relative pb-10 sm:pb-0"
      >
        <div className="w-full lg:w-12/12  xl:w-11/12  h-[655px] md:h-[500px] flex md:flex-row md:mt-10 lg:mt-0 flex-col-reverse items-center justify-evenly">
          <Keyboard
            guess={guess}
            updateGuess={updateGuess}
            splitedWord={splitedWord}
          />
          <Scene />
        </div>
        <Guess
          splitedWord={splitedWord}
          guess={guess}
          revealNextLetter={revealNextLetter}
        />
      </div>
    );
  } else if (result !== null) {
    return (
      <div
        style={backgroundStyle}
        className="w-full h-screen flex items-center justify-center"
      >
        <Result />
      </div>
    );
  }
};

export default Game;
