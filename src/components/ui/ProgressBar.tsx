export const ProgressBar = () => {
  return (
    <div className="bg-[#F2F2F2] h-[6px] rounded-lg w-full relative overflow-hidden">
      <div className="bg-blue-500 animate-progress-loading absolute z-10 h-[6px]  rounded-lg w-1/3"></div>
    </div>
  );
};
