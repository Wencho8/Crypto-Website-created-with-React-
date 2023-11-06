const NavBarBelow = () => {
    return (
      <div className="hidden sm:flex items-center justify-between w-full fixed bottom-0 p-1 bg-black bg-opacity-20 ">
        <div className="flex items-center justify-center gap-10 ml-7">
        <h1 className="text-sm font-mono text-slate-400 cursor-pointer transform transition duration-100  hover:scale-110 border-2 border-transparent  ">
          Discord
        </h1>
        <h1 className="text-sm font-mono text-slate-400 cursor-pointer transform transition duration-100  hover:scale-110 border-2 border-transparent  ">
          Twitter
        </h1>
        </div>
        <div className="flex items-center justify-center gap-10 mr-7">
          <button className=" text-sm font-mono text-slate-400 transform transition duration-100  hover:scale-110 border-2 border-transparent">
            LOREM
          </button>
          <button className="text-sm font-mono text-slate-400 transform transition duration-100  hover:scale-110">
            Litepaper
          </button>
        </div>
      </div>
    );
  };
  
  export default NavBarBelow;
  