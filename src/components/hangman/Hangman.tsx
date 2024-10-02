import Arm from "./Arm";
import Center from "./Center";
import Head from "./Head";
import Leg from "./Leg";
import Neck from "./Neck";

const Hangman = () => {
  return (
    <div className="w-full h-[400px] relative bg-gray-500">
      <div className="w-[250px] h-[10px] bg-neutral-300 relative   m-auto top-[390px]"></div>
      <div className="w-[10px] h-[390px] bg-neutral-300 relative bottom-[10px]   m-auto"></div>
      <div className="w-[200px] h-[60px] flex relative m-auto left-[95px]  bottom-[400px] border border-l-0 border-b-0 border-t-[10px] border-r-[10px] border-neutral-300"></div>
      <Head />
      <Neck />
      <Arm />
      <Center />
      <Leg />
    </div>
  );
};

export default Hangman;
