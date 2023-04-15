import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const offset = () => {
  return (
    <div className="flex flex-col items-center align justify-center p-32">
      <div className="flex w-full flex-col items-center justify-around">
        <Player
          autoplay
          loop
          src="https://assets4.lottiefiles.com/packages/lf20_ocBLovFChM.json"
          style={{ height: "600px", width: "100%" }}
        ></Player>
        <a
          href="https://treesforlife.org.uk/support/for-businesses/carbon-offsetting/"
          target="_blank"
        >
          <button className="btn btn-primary btn-outline btn-wide mt-4">
            Offset emissions
          </button>
        </a>
      </div>
    </div>
  );
};

export default offset;
