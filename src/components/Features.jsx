import React from "react";

const Features = () => {
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
        <button className="hover:border-b-4 hover:pb-2 hover:border-soft-red cursor-pointer">
          Simple Bookmarking
        </button>
        <button className="hover:border-b-4 hover:pb-2 hover:border-soft-red cursor-pointer">
          Speedy Searching
        </button>
        <button className="hover:border-b-4 hover:pb-2 hover:border-soft-red cursor-pointer">
          Easy Sharing
        </button>
      </div>
    </div>
  );
};

export default Features;
