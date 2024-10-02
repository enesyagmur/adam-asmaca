const Arm = () => {
  return (
    <div className="w-[400px] h-[80px]  flex items-start justify-center absolute top-[160px] left-[50%] ">
      <div className="w-[10px] h-[60px] bg-neutral-300 relative mb-[7%] transform rotate-45 left-[-5px]"></div>
      <div className="w-[20px] h-[20px] bg-neutral-300 rounded-full relative right-[-2px] top-[-5px]"></div>
      <div className="w-[80px] h-[10px] bg-neutral-300"></div>
      <div className="w-[20px] h-[20px] bg-neutral-300 rounded-full relative left-[-5px] top-[-5px]"></div>
      <div className="w-[10px] h-[60px] bg-neutral-300 transform rotate-[-45deg] ml-2 relative mb-[5%]"></div>
    </div>
  );
};

export default Arm;
