import Arm from "./Arm";
import Center from "./Center";
import Head from "./Head";
import Leg from "./Leg";
import Neck from "./Neck";

const Hangman = () => {
  return (
    <div className="w-full h-[300px] relative ">
      <div className="w-[150px] h-[10px] bg-neutral-300 relative   m-auto top-[290px]"></div>
      <div className="w-[10px] h-[290px] bg-neutral-300 relative bottom-[10px]   m-auto"></div>
      <div className="w-[200px] h-[40px] flex relative m-auto left-[95px]  bottom-[300px] border border-l-0 border-b-0 border-t-[10px] border-r-[10px] border-neutral-300"></div>
      <Head />
      <Neck />
      <Arm />
      <Center />
      <Leg />
    </div>
  );
};

export default Hangman;
