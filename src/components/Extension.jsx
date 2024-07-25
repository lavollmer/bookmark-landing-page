import React from "react";
import ChromeIcon from "../assets/logo-chrome.svg";
import FirefoxIcon from "../assets/logo-firefox.svg";
import OperaIcon from "../assets/logo-opera.svg";
import Dots from "../assets/bg-dots.svg";
import "../../src/App.css";

const Extension = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center m-10">
        <h1 className="flex flex-col items-center p-4 font-bold text-3xl  md:text-4xl text-very-dark-blue">
          Download the extension
        </h1>
        <p className="flex flex-col items-center p-6 text-grayish-blue text-md md:text-lg">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div>
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center p-6">
          <img src={ChromeIcon} alt="chrome icon" className="w-26 h-26" />
          <p className="text-grayish-blue text-sm mb-2 mt-2">
            Minimum version 62
          </p>
          <img src={Dots} alt="dots" className="w-full mt-6" />
          <button className="bg-soft-blue text-white rounded py-2 px-6 mt-6 hover:bg-soft-red">
            Add & Install Extension
          </button>
        </div>
      </div>
      <div>
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center p-6">
          <img src={FirefoxIcon} alt="firefox icon" className="w-26 h-26" />
          <p className="text-grayish-blue text-sm mb-2 mt-2">
            Minimum version 55
          </p>
          <img src={Dots} alt="dots" className="w-full mt-6" />
          <button className="bg-soft-blue text-white rounded py-2 px-6 mt-6  hover:bg-soft-red">
            Add & Install Extension
          </button>
        </div>
      </div>
      <div>
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center p-6">
          <img src={OperaIcon} alt="opera icon" className="w-26 h-26" />
          <p className="text-grayish-blue text-sm mb-2 mt-2">
            Minimum version 62
          </p>
          <img src={Dots} alt="dots" className="w-full mt-6" />
          <button className="bg-soft-blue text-white rounded py-2 px-6 mt-6  hover:bg-soft-red">
            Add & Install Extension
          </button>
        </div>
      </div>
    </div>
  );
};

export default Extension;
