import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Tree = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-5 items-center">
        <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/private_files/lf30_din9k7cf.json"
          style={{ height: "300px", width: "100%" }}
        ></Player>
        <h1 className="w-2/3 text-4xl text-primary italic">
          {" "}
          1 tree This web page emits the amount of carbon that 1 tree absorbs in
          a year.
        </h1>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_h03qgmzg.json"
          style={{ height: "300px", width: "100%" }}
        ></Player>
        <h1 className="w-2/3 text-4xl text-primary italic">
          {" "}
          44kWh of energy That’s enough electricity to drive an electric car
          282km.
        </h1>
      </div>
    </div>
  );
};

export default Tree;
