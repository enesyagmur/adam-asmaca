import { useSelector } from "react-redux";
import Arm from "./Arm";
import Center from "./Center";
import Head from "./Head";
import Leg from "./Leg";
import Neck from "./Neck";
import { stateRoot } from "../../Redux/store";

const Hangman = () => {
  const errorCount = useSelector((state: stateRoot) => state.errorStore.count);
  return (
    <div className="w-[200px] h-[500px] relative rounded-xl right-[75px] top-[90px]">
      {errorCount > 0 ? <Head /> : null}
      {errorCount > 1 ? <Neck /> : null}
      {errorCount > 2 ? <Arm /> : null}
      {errorCount > 3 ? <Center /> : null}
      {errorCount > 4 ? <Leg /> : null}
    </div>
  );
};

export default Hangman;
