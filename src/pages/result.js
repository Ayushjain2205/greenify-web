import React from "react";
import Comparision from "../components/Stats/Comparision";
import Carbon from "../components/Stats/Carbon";
import Weight from "../components/Stats/Weight";
import Tree from "../components/Stats/Tree";

const result = () => {
  return (
    <div className="flex flex-col items-center align justify-center p-32">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <Comparision />
        </div>
        <div id="item2" className="carousel-item w-full">
          <Carbon />
        </div>
        <div id="item3" className="carousel-item w-full">
          <Weight />
        </div>
        <div id="item4" className="carousel-item w-full">
          <Tree />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-secondary btn-circle btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-secondary btn-circle btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-secondary btn-circle btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-secondary btn-circle btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default result;
