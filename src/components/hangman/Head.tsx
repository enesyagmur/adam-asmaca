import { useSelector } from "react-redux";
import { stateRoot } from "../../Redux/store";
import { FaFaceSmile } from "react-icons/fa6";
import { FaFaceMeh } from "react-icons/fa6";
import { FaFaceFrown } from "react-icons/fa6";
import { FaFaceFrownOpen } from "react-icons/fa6";
import { FaFaceDizzy } from "react-icons/fa6";

const Head = () => {
  const errorCount = useSelector((state: stateRoot) => state.errorStore.count);

  if (errorCount === 1) {
    return (
      <div className="w-full h-[50px] flex justify-center items-center absolute top-[40px] m-auto ">
        <FaFaceSmile className="w-[50px] h-[50px] " />
      </div>
    );
  } else if (errorCount === 2) {
    return (
      <div className="w-full h-[50px] flex justify-center items-center absolute top-[40px] m-auto ">
        <FaFaceMeh className="w-[50px] h-[50px] " />
      </div>
    );
  } else if (errorCount === 3) {
    return (
      <div className="w-full h-[50px] flex justify-center items-center absolute top-[40px] m-auto ">
        <FaFaceFrown className="w-[50px] h-[50px] " />
      </div>
    );
  } else if (errorCount === 4) {
    return (
      <div className="w-full h-[50px] flex justify-center items-center absolute top-[40px] m-auto ">
        <FaFaceFrownOpen className="w-[50px] h-[50px] " />
      </div>
    );
  } else if (errorCount === 5) {
    return (
      <div className="w-full h-[50px] flex justify-center items-center absolute top-[40px] m-auto ">
        <FaFaceDizzy className="w-[50px] h-[50px] " />
      </div>
    );
  }
};

export default Head;
