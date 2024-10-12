import { useSelector } from "react-redux";
import { stateRoot } from "../../Redux/store";
import { FaFaceSmile } from "react-icons/fa6";
import { FaFaceMeh } from "react-icons/fa6";
import { FaFaceFrown } from "react-icons/fa6";
import { FaFaceFrownOpen } from "react-icons/fa6";
import { FaFaceDizzy } from "react-icons/fa6";
import { useEffect, useState } from "react";
import text from "../../data/languageText/textForHead.json";

const Head = () => {
  const errorCount = useSelector((state: stateRoot) => state.errorStore.count);
  const [messageBox, setMessageBox] = useState<boolean>(true);
  const language = useSelector(
    (state: stateRoot) => state.languageStore.language
  );

  useEffect(() => {
    setMessageBox(true);
    setTimeout(() => {
      setMessageBox(false);
    }, 2500);
  }, [errorCount]);

  if (errorCount === 1) {
    return (
      <div className="hangman-head ">
        <FaFaceSmile className="w-[50px] h-[50px] " />
        {messageBox && (
          <div className="hangman-message-cloud">
            <p className="hangman-message-text">
              {language === "en" ? text.error1.en : text.error1.tr}
            </p>
          </div>
        )}
      </div>
    );
  } else if (errorCount === 2) {
    return (
      <div className="hangman-head ">
        <FaFaceMeh className="w-[50px] h-[50px] " />
        {messageBox && (
          <div className="hangman-message-cloud">
            <p className="hangman-message-text">
              {language === "en" ? text.error2.en : text.error2.tr}
            </p>
          </div>
        )}
      </div>
    );
  } else if (errorCount === 3) {
    return (
      <div className="hangman-head ">
        <FaFaceFrown className="w-[50px] h-[50px] " />
        {messageBox && (
          <div className="hangman-message-cloud">
            <p className="hangman-message-text">
              {" "}
              {language === "en" ? text.error3.en : text.error3.tr}
            </p>
          </div>
        )}
      </div>
    );
  } else if (errorCount === 4) {
    return (
      <div className="hangman-head ">
        <FaFaceFrownOpen className="w-[50px] h-[50px] " />
        {messageBox && (
          <div className="hangman-message-cloud">
            <p className="hangman-message-text">
              {" "}
              {language === "en" ? text.error4.en : text.error4.tr}
            </p>
          </div>
        )}
      </div>
    );
  } else if (errorCount === 5) {
    return (
      <div className="hangman-head ">
        <FaFaceDizzy className="w-[50px] h-[50px] " />
        {messageBox && (
          <div className="hangman-message-cloud">
            <p className="hangman-message-text">
              {" "}
              {language === "en" ? text.error5.en : text.error5.tr}
            </p>
          </div>
        )}
      </div>
    );
  }
};

export default Head;
