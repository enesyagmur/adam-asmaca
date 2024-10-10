import { useSelector } from "react-redux";
import { stateRoot } from "../../Redux/store";
import { FaFaceSmile } from "react-icons/fa6";
import { FaFaceMeh } from "react-icons/fa6";
import { FaFaceFrown } from "react-icons/fa6";
import { FaFaceFrownOpen } from "react-icons/fa6";
import { FaFaceDizzy } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Head = () => {
  const errorCount = useSelector((state: stateRoot) => state.errorStore.count);
  const [messageBox, setMessageBox] = useState<boolean>(true);

  useEffect(() => {
    setMessageBox(true);
    setTimeout(() => {
      setMessageBox(false);
    }, 2500);
  }, [errorCount]);

  if (errorCount === 1) {
    return (
      <div className="w-full h-[50px] flex justify-center items-center absolute top-[40px] m-auto ">
        <FaFaceSmile className="w-[50px] h-[50px] " />
        {messageBox && (
          <div className="hangman-message-cloud">
            <p className="hangman-message-text">
              i see, we have made our first mistake
            </p>
          </div>
        )}
      </div>
    );
  } else if (errorCount === 2) {
    return (
      <div className="w-full h-[50px] flex justify-center items-center absolute top-[40px] m-auto ">
        <FaFaceMeh className="w-[50px] h-[50px] " />
        {messageBox && (
          <div className="hangman-message-cloud">
            <p className="hangman-message-text">
              okay, everyone deserves 3 chances
            </p>
          </div>
        )}
      </div>
    );
  } else if (errorCount === 3) {
    return (
      <div className="w-full h-[50px] flex justify-center items-center absolute top-[40px] m-auto ">
        <FaFaceFrown className="w-[50px] h-[50px] " />
        {messageBox && (
          <div className="hangman-message-cloud">
            <p className="hangman-message-text">i am starting to worry</p>
          </div>
        )}
      </div>
    );
  } else if (errorCount === 4) {
    return (
      <div className="w-full h-[50px] flex justify-center items-center absolute top-[40px] m-auto ">
        <FaFaceFrownOpen className="w-[50px] h-[50px] " />
        {messageBox && (
          <div className="hangman-message-cloud">
            <p className="hangman-message-text">please, I dont want to die</p>
          </div>
        )}
      </div>
    );
  } else if (errorCount === 5) {
    return (
      <div className="w-full h-[50px] flex justify-center items-center absolute top-[40px] m-auto ">
        <FaFaceDizzy className="w-[50px] h-[50px] " />
        {messageBox && (
          <div className="hangman-message-cloud">
            <p className="hangman-message-text">here, ignorance kills...</p>
          </div>
        )}
      </div>
    );
  }
};

export default Head;
