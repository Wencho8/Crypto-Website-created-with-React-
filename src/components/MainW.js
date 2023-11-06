import React from "react";
import NeonRectangle from "./NeonRectangle";
import classes from './NeonRectangle.module.css';

const MainW = () => {
  return (
    <div className="flex justify-center relative h-screen mt-40 2xl:mt-48">
      <div className=" flex-col mt-32">
        <h1 className={classes.logoName}>LOREM</h1>
        <h2 className="text-white font-pixel mt-3">THE INTEREST RATE SWAP AMM</h2>
      </div>
      <NeonRectangle initialRotation={10} direction={1}/>
      <NeonRectangle initialRotation={15} direction={1}/>
      <NeonRectangle initialRotation={20} direction={-1}/>
   </div>
  );
};

export default MainW;
