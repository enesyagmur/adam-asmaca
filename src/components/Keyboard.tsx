const Keyboard = () => {
  const letters: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className="w-8/12  flex flex-wrap justify-center mt-10 ">
      {letters.map((letter, index) => (
        <button className="keyboard-button" key={index}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
