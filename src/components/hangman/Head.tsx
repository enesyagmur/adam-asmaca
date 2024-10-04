import { FaRegFaceMeh } from "react-icons/fa6";
import { FaRegFaceFrown } from "react-icons/fa6";

const Head = () => {
  return (
    <div className="w-[215px] h-[50px] flex justify-end absolute top-[40px] left-[50%]">
      <FaRegFaceMeh className="w-[50px] h-[50px] text-neutral-300" />
    </div>
  );
};

export default Head;
