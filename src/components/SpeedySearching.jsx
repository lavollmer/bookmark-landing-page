import React from "react";
import IllustrationFeatureTwo from "../assets/illustration-features-tab-2.svg";

const SpeedySearching = () => {
  return (
    <div className="flex flew-row m-10">
      <div>
        <img src={IllustrationFeatureTwo} alt="illustration" />
      </div>
      <div>
        <h1 className="flex flex-col items-center p-4 font-bold text-3xl  md:text-4xl text-very-dark-blue">
          Intelligent Search
        </h1>
        <p className="flex flex-col items-center p-6 text-grayish-blue text-md md:text-lg">
          Our powerful search feature will help you find saved sties in not time
          at all. No need to trawl through all your bookmarks.
        </p>
        <button className="bg-soft-blue box-shadow py-2 px-2">More info</button>
      </div>
    </div>
  );
};

export default SpeedySearching;
