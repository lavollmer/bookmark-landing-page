import React from "react";
import IllustrationFeatureTwo from "../assets/illustration-features-tab-2.svg";

const SpeedySearching = () => {
  return (
    <div className="flex flew-row items-center justify-center m-10">
      <div>
        <img src={IllustrationFeatureTwo} alt="illustration" />
      </div>
      <div className="flex flex-col ml-20 space-y-6">
        <h1 className="flex flex-col font-bold text-3xl  md:text-4xl text-very-dark-blue">
          Intelligent Search
        </h1>
        <p className="flex flex-col text-grayish-blue text-md md:text-lg">
          Our powerful search feature will help you find saved sties in not time
          at all. No need to trawl through all your bookmarks.
        </p>
        <div>
          <button className="bg-soft-blue box-shadow rounded-lg text-white font-bold py-2 px-4">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpeedySearching;
