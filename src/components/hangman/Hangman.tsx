import { useSelector } from "react-redux";
import Arm from "./Arm";
import Center from "./Center";
import Head from "./Head";
import Leg from "./Leg";
import { stateRoot } from "../../Redux/store";
import Ring from "./Ring";

const Hangman = () => {
  const errorCount = useSelector((state: stateRoot) => state.errorStore.count);
  return (
    <div className="w-[200px] md:w-[200px] h-[300px] relative rounded-xl  text-blue-400 md:right-[47px] md:bottom-[25px] ">
      {errorCount > 0 ? <Head /> : null}
      {errorCount > 1 ? <Ring /> : null}
      {errorCount > 2 ? <Center /> : null}
      {errorCount > 3 ? <Arm /> : null}
      {errorCount > 4 ? <Leg /> : null}
    </div>
  );
};

export default Hangman;
