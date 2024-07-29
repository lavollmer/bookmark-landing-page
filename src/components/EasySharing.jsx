import React from "react";
import IllustrationFeatureThree from "../assets/illustration-features-tab-3.svg";

const EasySharing = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center m-10">
      <div>
        <img src={IllustrationFeatureThree} alt="illustration" />
      </div>
      <div className="flex flex-col items-center justify-center text-center md:ml-20 space-y-6">
        <h1 className="flex flex-col font-bold text-3xl  md:text-4xl text-very-dark-blue">
          Share your bookmarks
        </h1>
        <p className="flex flex-col text-grayish-blue text-md md:text-lg">
          Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
        </p>
        <div>
          <button className="bg-soft-blue hover:bg-soft-red box-shadow rounded-lg text-white font-bold py-2 px-4">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default EasySharing;
