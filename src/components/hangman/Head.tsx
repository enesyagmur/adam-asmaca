import { FaRegFaceMeh } from "react-icons/fa6";
import { FaRegFaceFrown } from "react-icons/fa6";

const Head = () => {
  return (
    <div className="w-[225px] h-[70px] flex justify-end absolute top-[60px] left-[50%]">
      <FaRegFaceMeh className="w-[70px] h-[70px] text-neutral-300" />
    </div>
  );
};

export default Head;
