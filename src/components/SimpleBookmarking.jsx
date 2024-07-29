import React from "react";
import IllustrationFeatureOne from "../assets/illustration-features-tab-1.svg";

const SimpleBookmarking = () => {
  return (
    <div className="flex flex-col md:flew-row items-center justify-center m-6 md:m-10">
      <div>
        <img src={IllustrationFeatureOne} alt="illustration" />
      </div>
      <div className="flex flex-col items-center text-center justify-center space-y-10 mt-10 md:ml-20 md:space-y-6">
        <h1 className="flex flex-col font-bold text-3xl  md:text-4xl text-very-dark-blue">
          Bookmark in one click
        </h1>
        <p className="flex flex-col text-grayish-blue text-md md:text-lg">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <div>
          <button className="bg-soft-blue box-shadow rounded-lg text-white font-bold py-2 px-4 hover:bg-soft-red">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleBookmarking;
