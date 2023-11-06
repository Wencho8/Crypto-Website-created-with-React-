import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const MarqueeBar = () => {
  const [prices, setPrices] = useState([]);


  const fetchPrices = async () => {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=arbitrum-ecosystem&order=market_cap_desc&per_page=15&page=1&sparkline=false&locale=en");
      const data = await response.json();

      const fetchedPrices = data.map((coin) => ({  //Itero en el array devuelto, y solamente dejo por elemento el symbol y el price. (Por eso map)
        symbol: coin.symbol,
        price: coin.current_price,
        image: coin.image,
        id: coin.id,
      }));

      console.log("Fetched prices:", fetchedPrices);
      setPrices(fetchedPrices);

    } catch (error) {
      console.error("Error fetching prices:", error);
    }
  };

  useEffect(() => {
    fetchPrices();
  }, []);


  return (
    <Marquee
      speed={70}
      className="flex items-center w-full p-1 z-0 bg-zinc-800 bg-opacity-20 backdrop-blur-sm"
    >
     {prices.map((coin) => (
        <div key={coin.id} className="flex items-center mr-10 gap-1 text-white">
          <img src={coin.image} alt={coin.symbol} className="mr-2 h-5 w-5" />
          <h1 className=" text-sm text font-pixel">{coin.symbol}</h1>
          <h1 className=" text-xs font-DMsans text-emerald-500">${coin.price}</h1>
        </div>
      ))} 
    </Marquee>
  );
};

export default MarqueeBar;
