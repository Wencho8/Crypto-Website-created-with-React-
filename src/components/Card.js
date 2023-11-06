import React, { useState, useEffect } from "react";

const Card = ({ title, description, image, rate }) => {
  const [price, setPrice] = useState(1);

  const fetchPrice = async () => {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/coins/ethereum?sparkline=false");
      const data = await response.json();

      setPrice(data.market_data.current_price.usd);

    } catch (error) {
      console.error("Error fetching prices:", error);
    }
  };

  useEffect(() => {
    fetchPrice();
  }, []);


    return (
       <div className="flex-col border-2 z-0 border-gray-700 rounded-sm items-start p-2 2xl:p-5 mb-3 md:mb-0 md:w-1/3 transition duration-300 hover:scale-105 hover:shadow-lg hover:border-cyan-500 hover:shadow-cyan-500">
        <div className=" flex items-center">
            <img src={image} alt={title} className="h-10 w-10 mr-2" />
            <div className="flex-col">
              <h1 className=" text-base 2xl:text-lg text font-pixel text-white">{title}</h1>
              <h1 className=" text-sm 2xl:text-base font-pixel font-bold text-emerald-500">{description}</h1>
            </div>
        </div>
        <div className="flex justify-between w-full mb-4">
            <div className="flex-col items-start">
              <h1 className="text-sm 2xl:text-base font-pixel text-white">price</h1> 
              <h1 className="text-sm 2xl:text-base font-pixel text-cyan-300">{price}</h1>
            </div>
            <div className="flex-col items-start">
              <h1 className=" text-sm font-pixel text-white">fixed rate</h1> 
              <h1 className="text-sm font-pixel text-cyan-300">{rate}</h1>
            </div>
        </div >
        <button className="rounded-sm border-2 border-transparent w-full text-lg font-normal font-pixel bg-cyan-800 text-cyan-300 hover:border-2 hover:border-cyan-500 hover:text-cyan-100">TRADE</button>
       </div>
    );
};

export default Card;