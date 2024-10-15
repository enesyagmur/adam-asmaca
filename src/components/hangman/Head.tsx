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
      <>
        <FaFaceSmile className="head-icon" />
        {messageBox && (
          <div className="hangman-message-cloud">
            <p className="hangman-message-text">
              {language === "en" ? text.error1.en : text.error1.tr}
            </p>
          </div>
        )}
      </>
    );
  } else if (errorCount === 2) {
    return (
      <>
        <FaFaceMeh className="head-icon" />

        {messageBox && (
          <div className="hangman-message-cloud">
            <p className="hangman-message-text">
              {language === "en" ? text.error2.en : text.error2.tr}
            </p>
          </div>
        )}
      </>
    );
  } else if (errorCount === 3) {
    return (
      <>
        <FaFaceFrown className="head-icon" />
        {messageBox && (
          <div className="hangman-message-cloud">
            <p className="hangman-message-text">
              {" "}
              {language === "en" ? text.error3.en : text.error3.tr}
            </p>
          </div>
        )}
      </>
    );
  } else if (errorCount === 4) {
    return (
      <>
        <FaFaceFrownOpen className="head-icon" />
        {messageBox && (
          <div className="hangman-message-cloud">
            <p className="hangman-message-text">
              {" "}
              {language === "en" ? text.error4.en : text.error4.tr}
            </p>
          </div>
        )}
      </>
    );
  } else if (errorCount === 5) {
    return (
      <>
        <FaFaceDizzy className="head-icon" />
        {messageBox && (
          <div className="hangman-message-cloud">
            <p className="hangman-message-text">
              {" "}
              {language === "en" ? text.error5.en : text.error5.tr}
            </p>
          </div>
        )}
      </>
    );
  }
};

export default Head;
