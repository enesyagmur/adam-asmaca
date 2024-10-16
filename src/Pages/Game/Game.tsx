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
  const [guessCounter, setGuessCounter] = useState<number>(0);

  const initialGuess = useMemo(() => {
    return Array(splitedWord.length).fill("");
  }, [splitedWord.length]);

  const [guess, setGuess] = useState<string[]>(initialGuess);

  console.log(splitedWord);

  const revealNextLetter = () => {
    setGuess((prevGuess) => {
      const newGuess = [...prevGuess];
      newGuess[guessCounter] = splitedWord[guessCounter];
      return newGuess;
    });
    setGuessCounter((prevCounter) => prevCounter + 1);
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
        className="w-full md:h-screen flex flex-col-reverse md:flex-col items-center  text-black lg:p-10 relative"
      >
        <div className="w-full lg:w-12/12  xl:w-11/12  h-[655px] md:h-[500px] flex md:flex-row md:mt-10 lg:mt-0 flex-col-reverse items-center justify-evenly">
          <Keyboard
            guess={guess}
            setGuess={setGuess}
            guessCounter={guessCounter}
            setGuessCounter={setGuessCounter}
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
