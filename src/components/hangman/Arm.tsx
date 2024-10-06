const Arm = () => {
  return (
    <div className="w-full h-[80px]  flex items-start justify-center absolute top-[113px]  pl-[10px]">
      <div className="w-[10px] h-[60px] bg-black relative mb-[7%] transform rotate-45 left-[-5px]"></div>
      <div className="w-[20px] h-[20px] bg-black rounded-full relative right-[-2px] top-[-5px]"></div>
      <div className="w-[80px] h-[10px] bg-black"></div>
      <div className="w-[20px] h-[20px] bg-black rounded-full relative left-[-5px] top-[-5px]"></div>
      <div className="w-[10px] h-[60px] bg-black transform rotate-[-45deg] ml-2 relative mb-[5%]"></div>
    </div>
  );
};

export default Arm;
