import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Comparision = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-5 items-center">
        <Player
          autoplay
          loop
          src="https://assets4.lottiefiles.com/packages/lf20_vwoauv0p.json"
          style={{ height: "300px", width: "100%" }}
        ></Player>
        <h1 className="w-2/3 text-4xl text-primary italic">
          {" "}
          Only 0.14 g of CO2 is produced every time someone visits this web
          page.
        </h1>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/private_files/lf30_p6kiqhxf.json"
          style={{ height: "300px", width: "100%" }}
        ></Player>
        <h1 className="w-2/3 text-4xl text-primary italic">
          {" "}
          This web page appears to be running on sustainable energy.
        </h1>
      </div>
    </div>
  );
};

export default Comparision;
