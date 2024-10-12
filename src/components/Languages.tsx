import { useDispatch, useSelector } from "react-redux";
import turkeyFlag from "../assets/turkey-flag.png";
import usaFlag from "../assets/usa-flag.png";
import { updateLanguage } from "../Redux/languageSlice";
import { stateRoot } from "../Redux/store";

const Languages = () => {
  const language = useSelector(
    (state: stateRoot) => state.languageStore.language
  );
  const dispatch = useDispatch();
  return (
    <div className="w-[40px] h-[50px] flex items-center justify-between absolute right-2 top-0">
      {language === "en" ? (
        <img
          src={turkeyFlag}
          alt="flag"
          className="w-[40px] h-[40px] object-cover cursor-pointer hover:opacity-80"
          onClick={() => dispatch(updateLanguage())}
        />
      ) : (
        <img
          src={usaFlag}
          alt="flag"
          className="w-[40px] h-[40px] object-cover cursor-pointer hover:opacity-80"
          onClick={() => dispatch(updateLanguage())}
        />
      )}
    </div>
  );
};

export default Languages;
