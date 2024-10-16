import bgImage from "../../assets/bg2.jpg";
import { FaFaceGrinBeamSweat } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { stateRoot } from "../../Redux/store";
import text from "../../data/languageText/textForNotFound.json";

const NotFound = () => {
  const navigate = useNavigate();
  const language = useSelector(
    (state: stateRoot) => state.languageStore.language
  );

  const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "object-cover",
    backgroundRepeat: "repeat",
  };

  return (
    <div
      style={backgroundStyle}
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="w-10/12 sm:w-8/12 lg:w-6/12 h-4/6 sm:h-3/6 bg-white flex flex-col items-center justify-between text-black rounded-xl">
        <div className="w-full h-2/6 bg-neutral-600 text-white relative text-xl  md:text-2xl lg:text-3xl font-bold uppercase flex items-center justify-center rounded-t-xl">
          <p className="">
            {language === "en" ? text.title.en : text.title.tr}
          </p>
          <FaFaceGrinBeamSweat className="absolute left-[90%]" />
        </div>

        <div className="w-full h-2/6 flex items-center justify-center pt-6 text-lg md:text-xl">
          <p> {language === "en" ? text.info.en : text.info.tr}</p>
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
