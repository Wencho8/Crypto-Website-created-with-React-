import React from "react";

const Players = () => {
  return (
    <div
      id="Players"
      className="h-full flex-col justify-center mt-72 mb-72 xl:mt-0 backdrop-blur-sm"
    >
      <div className="text-center mb-4">
        <p className="text-white text-sm 2xl:text-lg mb-2 m-auto w-fit px-3 border-b-2 border-b-cyan-500 font-pixel">
          THE PLAYERS
        </p>
        <h1 className="font-bold text-xl md:text-3xl font-mono mb-6 text-white">
          Trade Rates Like a Pro
        </h1>
        <p className=" text-slate-400 md:text-lg m-auto w-5/6 md:w-1/2 font-pixel leading-tight">
          {" "}
          Lorem is foundational defi infrastructure, unlocking waves of
          composable, community-led opportunities for builders, innovators and
          creators.
        </p>
      </div>
      <div className=" md:flex w-5/6 justify-between m-auto mt-24 2xl:mt-28 mb-10 gap-4 cursor-pointer">
        <div className="flex-col md:w-1/4 border-2 z-0 border-gray-900 rounded-sm items-start p-2 mb-3 md:mb-0 transition duration-300 hover:scale-105 hover:shadow-lg hover:border-cyan-500 hover:shadow-cyan-500">
          <h1 className="text-lg font-pixel 2xl:text-2xl text-cyan-300">
            FIX TAKERS
          </h1>
          <p className="text-base font-pixel 2xl:text-lg text-slate-400">
            Trading rates for fixed returns? Convert any asset with a variable
            rate into a fixed rate product.
          </p>
        </div>
        <div className="flex-col md:w-1/4 border-2 z-0 border-gray-900 rounded-sm items-start p-2 mb-3 md:mb-0 transition duration-300 hover:scale-105 hover:shadow-lg hover:border-fuchsia-500 hover:shadow-fuchsia-500">
          <h1 className="text-lg font-pixel  2xl:text-2xl text-fuchsia-300">
            LIQUIDITY PROVIDER
          </h1>
          <p className="text-base font-pixel 2xl:text-lg text-slate-400">
            Liquidity to invest? Deposit within your tick range, collect
            returns.
          </p>
        </div>
        <div className="flex-col md:w-1/4 border-2 z-0 border-gray-900 rounded-sm items-start p-2 mb-3 md:mb-0 transition duration-300 hover:scale-105 hover:shadow-lg hover:border-emerald-500 hover:shadow-emerald-500">
          <h1 className="text-lg font-pixel  2xl:text-2xl text-emerald-300">
            VARIABLE TAKERS
          </h1>
          <p className="text-base font-pixel 2xl:text-lg text-slate-400">
            Trading variable rates with leverage? Take variable, take alpha.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Players;
