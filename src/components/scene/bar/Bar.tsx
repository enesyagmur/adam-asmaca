const Bar = () => {
  return (
    <div className="w-6/12 h-4/6">
      <div className="w-[150px] h-[10px] bg-neutral-400 relative  top-[290px]"></div>
      <div className="w-[10px] h-[290px] bg-neutral-400  md:h-[290px]  relative bottom-[10px] left-[70px]"></div>
      <div className="w-[129px]  md:w-[200px] h-[40px] md:h-[56px]  flex relative  left-[70px] bottom-[300px]  md:bottom-[300px] border border-l-0 border-b-0 border-t-[10px] border-r-[10px] border-neutral-400"></div>
    </div>
  );
};

export default Bar;
