export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 relative animate-spin">
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/4 left-0 w-3 h-3 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/4 right-0 w-3 h-3 bg-white rounded-full animate-ping"></div>
      </div>
    </div>
  );
};