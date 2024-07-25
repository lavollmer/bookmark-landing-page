import React from "react";
import { useState } from "react";
import SpeedySearching from "./SpeedySearching";
import SimpleBookmarking from "./SimpleBookmarking";
import EasySharing from "./EasySharing";

const Features = () => {
  const [features, setFeatures] = useState(null);

  const handleSimple = () => {
    setFeatures("simpleBookmarking");
    console.log("simpleBookmarking");
    return;
  };

  const handleSpeedy = () => {
    setFeatures("speedySearching");
    console.log("speedySearching");
    return;
  };

  const handleEasy = () => {
    setFeatures("easySharing");
    console.log("easySharing");
    return;
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center m-10">
        <h1 className="flex flex-col items-center p-4 font-bold text-3xl  md:text-4xl text-very-dark-blue">
          Features
        </h1>
        <p className="flex flex-col items-center p-6 text-grayish-blue text-md md:text-lg">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="flex flex-row items-center justify-evenly text-grayish-blue border-b border-grayish-blue font-bold">
        <button
          onClick={handleSimple}
          className="hover:border-b-4 hover:pb-2 hover:border-soft-red cursor-pointer"
        >
          Simple Bookmarking
        </button>
        <button
          onClick={handleSpeedy}
          className="hover:border-b-4 hover:pb-2 hover:border-soft-red cursor-pointer"
        >
          Speedy Searching
        </button>
        <button
          onClick={handleEasy}
          className="hover:border-b-4 hover:pb-2 hover:border-soft-red cursor-pointer"
        >
          Easy Sharing
        </button>
      </div>
      {features === "simpleSearching" && <SimpleSearching />}
      {features === "speedySearching" && <SpeedySearching />}
      {features === "easySharing" && <EasySharing />}
    </div>
  );
};

export default Features;
