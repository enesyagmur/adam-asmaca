import Hangman from "../hangman/Hangman";
import Player from "../Player";
import Bar from "./bar/Bar";

const Scene = () => {
  return (
    <div className="w-[350px] md:w-[550px] h-[450px] md:h-full mt-4 md:mt-1  flex justify-start items-center relative bg-white rounded-xl p-2">
      <Player />
      <Bar />
      <Hangman />
      <div className="w-full h-[70px] md:h-[110px] bottom-0 bg-neutral-600 absolute right-[0px] rounded-xl"></div>
    </div>
  );
};

export default Scene;
