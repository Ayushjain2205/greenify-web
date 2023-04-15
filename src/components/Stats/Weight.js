import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Weight = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-5 items-center">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_a7pLM8ebPy.json"
          style={{ height: "300px", width: "100%" }}
        ></Player>
        <h1 className="w-2/3 text-4xl text-primary italic">
          {" "}
          16.91kg of CO2 equivalent. The same weight as 0.11 sumo wrestlers and
          as much CO2 as boiling water for 2,292 cups of tea
        </h1>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_fakgwenv.json"
          style={{ height: "300px", width: "100%" }}
        ></Player>
        <h1 className="w-2/3 text-4xl text-primary italic">
          {" "}
          18 billion bubbles Woah, that’s a lot of bubbles!
        </h1>
      </div>
    </div>
  );
};

export default Weight;
