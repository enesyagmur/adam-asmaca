import Hangman from "../../components/hangman/Hangman";
import Guess from "../../components/Guess";
import Keyboard from "../../components/Keyboard";
import { useSelector } from "react-redux";
import { stateRoot } from "../../Redux/store";

const Game = () => {
  const sipletedWord = useSelector(
    (state: stateRoot) => state.wordStore.sipletedWord
  );

  return (
    <div className="w-full h-screen flex flex-col items-center bg-neutral-800 text-white p-0 lg:p-20">
      <Hangman />
      <Guess sipletedWord={sipletedWord} />
      <Keyboard />
    </div>
  );
};

export default Game;
