import React from "react";
import { useState } from "react";
// import each component that will show on the Features component
import SpeedySearching from "./SpeedySearching";
import SimpleBookmarking from "./SimpleBookmarking";
import EasySharing from "./EasySharing";

const Features = () => {
  // state for the features - base line is null
  const [features, setFeatures] = useState(null);

  // this function sets the features useState to simpleBookmarking which in turn will show the SimpleBookmarking component
  const handleSimple = () => {
    setFeatures("simpleBookmarking");
    console.log("simpleBookmarking");
    return;
  };

  // this function sets the features useState to speedySearching which in turn will show the SpeedySearching component
  const handleSpeedy = () => {
    setFeatures("speedySearching");
    console.log("speedySearching");
    return;
  };

  // this function sets the features useState to easySharing which in turn will show the EasySharing component
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
      {/* scrolling through each section of the Features with mouse */}
      <div className="flex flex-col md:flex-row items-center justify-evenly text-xl text-grayish-blue border-grayish-blue space-y-4">
        <hr className="md:hidden w-3/4 border-t border-gray-300" />
        {/* when scrolling over the Simple Bookmarking section it will send a signal to the handleSimple function */}
        <button
          onMouseEnter={handleSimple}
          className="hover:border-b-2 hover:border-soft-red hover:text-very-dark-blue cursor-pointer"
        >
          Simple Bookmarking
        </button>
        {/* light gray line between sections */}
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
      {/* if features is exactly equivalent to simpleBookmarking then show SimpleBookmarking component */}
      {features === "simpleBookmarking" && <SimpleBookmarking />}
      {/* if features is exactly equivalent to speedySearching then show speedySearching component */}
      {features === "speedySearching" && <SpeedySearching />}
      {/* if features is exactly equivalent to easySharing then show easySharing component */}
      {features === "easySharing" && <EasySharing />}
    </div>
  );
};

export default Features;
