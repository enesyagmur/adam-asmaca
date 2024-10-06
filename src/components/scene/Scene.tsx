import Hangman from "../hangman/Hangman";
import Bar from "./bar/Bar";

const Scene = () => {
  return (
    <div className="w-[530px] h-[500px] md:h-full flex justify-start items-center relative bg-white rounded-xl p-2">
      <Bar />
      <Hangman />
    </div>
  );
};

export default Scene;
