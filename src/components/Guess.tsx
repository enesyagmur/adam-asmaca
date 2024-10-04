const Guess = () => {
  return (
    <div className="w-full h-[100px] flex flex-col items-center justify-between mt-8">
      <div className="w-3/12 h-[80px] flex items-center justify-between">
        <input type="text" maxLength={1} className="guess-input" />
        <input type="text" maxLength={1} className="guess-input" />
        <input type="text" maxLength={1} className="guess-input" />
        <input type="text" maxLength={1} className="guess-input" />
      </div>
      <div className="w-3/12 h-[20px] flex items-center justify-between">
        <div className="guess-line"></div>
        <div className="guess-line"></div>
        <div className="guess-line"></div>
        <div className="guess-line"></div>
      </div>
    </div>
  );
};

export default Guess;
