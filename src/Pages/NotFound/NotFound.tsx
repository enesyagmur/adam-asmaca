import bgImage from "../../assets/bg2.jpg";
import { FaFaceGrinBeamSweat } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="w-10/12 sm:w-8/12 lg:w-6/12 h-4/6 sm:h-3/6 bg-white flex flex-col items-center justify-between text-black rounded-xl">
        <div className="w-full h-2/6 bg-neutral-600 text-white relative text-xl  md:text-2xl lg:text-3xl font-bold uppercase flex items-center justify-center rounded-t-xl">
          <p className="">Oops! You came wrong.</p>
          <FaFaceGrinBeamSweat className="absolute left-[90%]" />
        </div>

        <div className="w-full h-2/6 flex items-center justify-center pt-6 text-lg md:text-xl">
          <p>Page not found</p>
        </div>

        <div className="w-7/12 md:w-4/12 h-2/6 flex items-center justify-evenly  text-6xl">
          <AiFillHome
            className="text-neutral-600 cursor-pointer hover:text-black"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
