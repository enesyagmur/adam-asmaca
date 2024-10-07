import Hangman from "../hangman/Hangman";
import Bar from "./bar/Bar";

const Scene = () => {
  return (
    <div className="w-[350px] md:w-[550px] h-[450px] md:h-full mt-4 md:mt-1  flex justify-start items-center relative bg-white rounded-xl p-2">
      <Bar />
      <Hangman />
    </div>
  );
};

export default Scene;
