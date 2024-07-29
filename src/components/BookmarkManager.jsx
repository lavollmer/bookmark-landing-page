import React from "react";
import illustrationHero from "../assets/illustration-hero.svg";
import "../styles/Blueshape.css";

import "../App.css";

const BookmarkManager = () => {
  return (
    <div>
      <div className="flex flex-row space-x-4 p-20">
        <div className="flex flex-col m-20 font-rubik w-1/2 space-y-40">
          <div className="flex flex-col justify-start p-20 space-y-10">
            <div className="flex flex-col space-y-10">
              <h1 className="flex flex-col font-bold text-6xl text-very-dark-blue">
                A Simple Bookmark Manager
              </h1>
              <p className="flex flex-row text-grayish-blue text-xl">
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </p>
            </div>
            <div className="flex flex-row  mt-2 space-x-4 font-rubik">
              <div>
                <button className="box-shadow bg-soft-blue text-white rounded-md text-md py-3 md:text-lg md:py-3 px-2 md:px-4 ">
                  Get it on Chrome
                </button>
              </div>
              <div>
                <button className="box-shadow bg-customGray text-very-dark-blue rounded-md font-bold text-md md:text-lg py-3 md:py-3 px-2 md:px-4 ">
                  Get it on Firefox
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <img src={illustrationHero} alt="Illustration" />
        </div>
      </div>
      <div className="md:hidden flex flex-col font-rubik">
        <div>
          <img src={illustrationHero} alt="Illustration" />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col items-center text-center justify-center md:m-10">
            <h1 className="flex flex-col items-center p-4 font-bold text-3xl  md:text-4xl text-very-dark-blue">
              A Simple Bookmark Manager
            </h1>
            <p className="flex flex-col md:flex-row items-center p-6 text-grayish-blue text-md md:text-lg">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center mt-2 space-x-4 font-rubik">
          <div>
            <button className="box-shadow bg-soft-blue text-white rounded-md text-md py-3 md:text-lg md:py-3 px-2 md:px-4 ">
              Get it on Chrome
            </button>
          </div>
          <div>
            <button className="box-shadow bg-customGray text-very-dark-blue rounded-md font-bold text-md md:text-lg py-3 md:py-3 px-2 md:px-4 ">
              Get it on Firefox
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkManager;
