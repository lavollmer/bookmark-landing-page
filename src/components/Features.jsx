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
      <div className="flex flex-col items-center justify-center m-2">
        <h1 className="flex flex-col items-center mt-40 font-bold text-2xl  md:text-4xl text-very-dark-blue">
          Features
        </h1>
        <p className="flex flex-col items-center justify-center text-center p-6 text-grayish-blue text-md md:text-lg">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-evenly text-xl text-grayish-blue border-grayish-blue space-y-4">
        <hr className="md:hidden w-3/4 border-t border-gray-300" />
        <button
          onMouseEnter={handleSimple}
          className="hover:border-b-2 hover:border-soft-red hover:text-very-dark-blue cursor-pointer"
        >
          Simple Bookmarking
        </button>
        <hr className="md:hidden w-3/4 border-t border-gray-300" />
        <button
          onMouseEnter={handleSpeedy}
          className="hover:border-b-2  hover:border-soft-red hover:text-very-dark-blue cursor-pointer"
        >
          Speedy Searching
        </button>
        <hr className="md:hidden w-3/4  border-t border-gray-300" />
        <button
          onMouseEnter={handleEasy}
          className="hover:border-b-2 hover:border-soft-red hover:text-very-dark-blue cursor-pointer"
        >
          Easy Sharing
        </button>
        <hr className="md:hidden w-3/4  border-t hover:text-very-dark-blue border-gray-300" />
      </div>
      <hr className="hidden md:block justify-center items-center m-10 border-t hover:text-very-dark-blue border-gray-300" />
      {features === "simpleBookmarking" && <SimpleBookmarking />}
      {features === "speedySearching" && <SpeedySearching />}
      {features === "easySharing" && <EasySharing />}
    </div>
  );
};

export default Features;
