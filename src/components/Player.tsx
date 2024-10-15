import { useRef, useState } from "react";
import music from "../song/music1.mp3";
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playMusic = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.play();
      setIsPlaying(true);
    }
  };

  const pauseMusic = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]  absolute top-2 right-1 md:top-5 md:right-5 z-50 flex items-center justify-center bg-white text-blue-400   cursor-pointer rounded-full border-2 border-blue-400 hover:bg-blue-400 hover:text-white">
      {isPlaying ? (
        <button onClick={pauseMusic}>{<FaVolumeMute />}</button>
      ) : (
        <button onClick={playMusic}>{<FaVolumeHigh />}</button>
      )}

      <audio ref={audioRef} src={music} autoPlay loop />
    </div>
  );
};

export default Player;
