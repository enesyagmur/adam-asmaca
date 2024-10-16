import { useEffect, useRef } from "react";
import music from "../song/music1.mp3";
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import winGame from "../song/win-game.mp3";
import loseGame from "../song/lose-game.mp3";
import { useDispatch, useSelector } from "react-redux";
import { stateRoot } from "../Redux/store";
import { updateMusicOpen } from "../Redux/musicSlice";

type PlayerProps = {
  type: string;
};

const Player: React.FC<PlayerProps> = ({ type }) => {
  const isPlaying = useSelector((state: stateRoot) => state.musicSlice.open);
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useDispatch();

  const playAndPauseFunc = () => {
    dispatch(updateMusicOpen());
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }, [isPlaying]);

  if (type === "main") {
    return (
      <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]  absolute top-2 right-1 md:top-5 md:right-5 z-50 flex items-center justify-center bg-white text-blue-400   cursor-pointer rounded-full border-2 border-blue-400 hover:bg-blue-400 hover:text-white">
        <button onClick={playAndPauseFunc}>
          {isPlaying ? <FaVolumeMute /> : <FaVolumeHigh />}
        </button>
        <audio ref={audioRef} src={music} autoPlay loop />
      </div>
    );
  } else if (type === "win") {
    return (
      <div className="result-player bg-white text-black  border-green-500 hover:bg-black hover:text-white">
        <button onClick={playAndPauseFunc}>
          {isPlaying ? <FaVolumeMute /> : <FaVolumeHigh />}
        </button>

        <audio ref={audioRef} src={winGame} autoPlay />
      </div>
    );
  } else if (type === "lose") {
    return (
      <div className="result-player bg-white text-black  border-red-500 hover:bg-black hover:text-red-500">
        <button onClick={playAndPauseFunc}>
          {isPlaying ? <FaVolumeMute /> : <FaVolumeHigh />}
        </button>

        <audio ref={audioRef} src={loseGame} autoPlay />
      </div>
    );
  }
};

export default Player;
