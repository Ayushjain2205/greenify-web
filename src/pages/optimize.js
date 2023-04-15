import React from "react";
import data from "../utils/data";
import TipCard from "../components/TipCard";

const optimize = () => {
  return (
    <div className="flex flex-col items-center align justify-center p-32">
      <div className="grid grid-cols-3 gap-20">
        {data.map((item) => (
          <TipCard
            name={item.name}
            image={item.image}
            description={item.description}
            categories={item.categories}
            modalData={item.modalData}
          />
        ))}
      </div>
    </div>
  );
};

export default optimize;
