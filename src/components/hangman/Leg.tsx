const Leg = () => {
  return (
    <div className="w-full h-[110px] flex items-start justify-center absolute top-[170px] ">
      <div className="w-[10px] h-[110px] bg-blue-400 transform rotate-45 mr-16"></div>
      <div className="w-[10px] h-[110px] bg-blue-400 transform rotate-[-45deg]"></div>
    </div>
  );
};

export default Leg;
