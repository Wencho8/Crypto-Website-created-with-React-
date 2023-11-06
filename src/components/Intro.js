import React from "react";
import Card from "./Card";

const Intro = () => {
  
  return (
    <div id="Intro" className=" h-full flex-col justify-center mt-20 mb-72 xl:mt-0">
      <div className="text-center mb-4">
        <p className="text-white text-sm mb-2 m-auto w-fit px-3 border-b-2 2xl:text-lg border-b-fuchsia-700 font-pixel">
          THE PROTOCOL
        </p>
        <h1 className="font-bold text-xl md:text-3xl font-mono mb-6 text-white">
          Decentralized. Synthetic. Efficient.
        </h1>
        <p className=" text-slate-400 md:text-lg m-auto w-5/6 sm:w-1/2 2xl:w-3/5 font-pixel leading-tight">
          {" "}
          Lorem is a novel defi primitive, powering leveraged interest rate swaps. The first ever synthetic interest rate swap AMM, Voltz AMM utilizes concentrated liquidity, creating a market that’s c.3000x more capital efficient.
        </p>
      </div>
      <div className="md:flex w-1/2 2xl:w-3/5 justify-between m-auto mb-24">
        <div className="flex-col mt-3 xl:mt-10">
          <h1 className="md:text-center font-bold font-pixel text-3xl  text-white">
            &gt;$22.41Bn
          </h1>
          <p className=" text-pink-500 text-base m-auto font-pixel leading-tight">
            NATIONAL TRADED
          </p>
        </div>
        <div className="flex-col mt-3 xl:mt-10">
          <h1 className="md:text-center font-bold font-pixel text-3xl  text-white">
            &gt;$11Bn
          </h1>
          <p className=" text-pink-500 text-base m-auto font-pixel leading-tight">
            NOTIONAL LIQUIDITY PROVIDED
          </p>
        </div>
      </div>
      <div className=" flex-col">
        <h1 className="font-bold font-pixel text-lg sm:text-2xl text-pink-500 m-auto w-4/6 md:w-1/2 2xl:w-3/5 mb-3">
          MAINNET <span className="text-white">MARKETS</span>
        </h1>
        <p className=" text-slate-400 text-base sm:text-lg m-auto  w-4/6 md:w-1/2  2xl:w-3/5 font-pixel leading-tight">
          {" "}
          Trade fixed or variable rates on stablecoins and ETH borrow markets. Convert variable borrowing costs into fixed borrowing costs with a few clicks.
        </p>
      </div>
      <div className="md:flex w-4/6 md:w-1/2 2xl:w-3/5 justify-between m-auto mt-6 mb-10 gap-4 cursor-pointer"> {/* m-auto para centrar con w-1/2 */}
        <Card title="ETH" description="USDC" image="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880"  rate="1.00" />
        <Card title="ETH" description="USDT" image="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880" rate="1.00" />
        <Card title="ETH" description="BUSD" image="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880" rate="1.00" />
      </div>
    </div>
  );
};

export default Intro;
