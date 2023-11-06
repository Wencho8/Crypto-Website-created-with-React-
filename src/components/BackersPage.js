import React from "react";
import C1 from "../assets/c1.svg"
import C2 from "../assets/c2.svg"
import C3 from "../assets/c3.svg"
import C4 from "../assets/c4.svg"
import C5 from "../assets/c5.svg"
import C6 from "../assets/c6.svg"
import C7 from "../assets/c7.svg"
import C9 from "../assets/C9.svg"
import classes from "./Backers.module.css";



const Backers = () => {
    const images = [C1, C2, C3, C4, C5, C6, C7, C9];
   
    const renderImages = () => {
        const rows = [];
        for (let i = 0; i < images.length; i += 4) {
          const row = (
            <div key={i} className="  md:flex md:justify-center 2xl:gap-28 ">
              {images.slice(i, i + 4).map((image, index) => (
                <img key={index} src={image} alt={`Company ${i + index + 1}`} className="mr-auto ml-auto right-0 left-0 w-32 h-32 md:w-40 md:h-40 md:mx-4 md:my-2 cursor-pointer 2xl:w-60 2xl:h-60 hover:scale-105 transform duration-500" />
              ))}
            </div>
          );
          rows.push(row);
        }
        return rows;
      };

  return (
    <div id="Backers" className="h-full flex-col justify-center mt-72 mb-20 xl:mt-0">
      <div
        className={classes.container}
      ></div>
      <div className="text-center mb-4">
        <p className="text-white text-sm mb-2 m-auto w-fit px-3 2xl:text-lg border-b-2 border-b-emerald-500 font-pixel">
          THE RAIN MAKERS
        </p>
        <h1 className="font-bold text-xl md:text-3xl font-mono mb-6 text-white">
          Backed by the Best
        </h1>
      </div>
      <div>
       {renderImages()}
      </div>
    </div>
  );
};

export default Backers;
