type GuessProps = {
  sipletedWord: string[];
};

const Guess: React.FC<GuessProps> = ({ sipletedWord }) => {
  console.log(sipletedWord);

  return (
    <div className="w-full h-[100px] flex flex-col items-center justify-between mt-8">
      <div className="w-full h-[80px] flex items-center justify-center">
        {sipletedWord.map((char, index) => (
          <input
            type="text"
            maxLength={1}
            className="guess-input"
            key={index + char}
          />
        ))}
      </div>
      <div className="w-full h-[20px] flex items-center justify-center">
        {sipletedWord.map((index) => (
          <span className="guess-line" key={index}></span>
        ))}
      </div>
    </div>
  );
};

export default Guess;
