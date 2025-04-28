export const LoginPage = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;

  const redirectToGithub = () => {
    const redirectUri = 'http://localhost:5173/standing';
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo`;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#171d25]">
      <div className="flex flex-col gap-[35px]">
        <h2 className="text-[#fff] text-[28px] font-extrabold">Sign in</h2>
        <div className="bg-[#181a21] rounded-[4px] px-[32px] py-[24px] min-w-[636px]">
          <button
            onClick={redirectToGithub}
            className="cursor-pointer bg-gradient-to-r from-[#06BFFF] w-full to-[#2D73FF] text-[#fff] text-[16px] font-normal p-[12px] text-center rounded-[2px]">
            Github
          </button>
        </div>
      </div>
    </div>
  );
};
