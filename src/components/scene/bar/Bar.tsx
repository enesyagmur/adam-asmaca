const Bar = () => {
  return (
    <div className="w-6/12  h-[440px] relative mb-[60px] md:mb-0 ">
      <div className="w-[150px] h-[20px]  bg-neutral-400 relative rounded-t-xl  top-[420px] md:top-[340px]"></div>
      <div className="w-[20px] h-[380px] md:h-[340px]   bg-neutral-400   relative top-[20px] md:top-[-20px]   left-[70px]"></div>
      <div className="w-[200px] md:w-[260px] h-[80px]  md:h-[90px]   flex relative  left-[70px] bottom-[360px]  md:bottom-[360px] border border-l-0 border-b-0 border-t-[20px] border-r-[20px] border-neutral-400 rounded-tr-xl"></div>
      <div className="w-[15px] h-[90px]  bg-neutral-400 left-[110px] bottom-[310px]   md:bottom-[350px] absolute transform rotate-45 z-40"></div>
    </div>
  );
};

export default Bar;
