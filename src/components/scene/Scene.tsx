import Hangman from "../hangman/Hangman";
import Player from "../Player";
import Bar from "./bar/Bar";

const Scene = () => {
  return (
    <div className="w-[350px] md:w-[550px] h-[500px] md:h-full mt-4 md:mt-1 bg-white flex justify-start items-center relative  rounded-xl md:p-2 shadow-md shadow-black">
      <Player type={"main"} />
      <Bar />
      <Hangman />
      <div className="w-full h-[60px] md:h-[110px] bottom-0 bg-neutral-600 absolute right-[0px] rounded-tr-xl"></div>
    </div>
  );
};

export default Scene;
