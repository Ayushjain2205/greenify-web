import React, { useState, useEffect } from "react";
import Axios from "axios";

const find = () => {
  const [searchString, setSearchString] = useState([]);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await Axios.get(
        `api/scrape?searchString=${searchString}`
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center align justify-center p-32">
      <h1 className="text-6xl text-secondary italic mb-16 font-bold">
        Enter your website URL
      </h1>
      <div className="flex flex-row gap-2 w-1/3 ">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
          onChange={(e) => setSearchString(e.target.value)}
        />
        <button
          className="btn text-3xl text-primary btn-square btn-ghost"
          onClick={() => fetchData()}
        >
          <i class="fa-brands fa-searchengin"></i>
        </button>
      </div>
    </div>
  );
};

export default find;
