import React from "react";
import illustrationHero from "../assets/illustration-hero.svg";
import "../styles/Blueshape.css";

const BookmarkManager = () => {
  return (
    <div className="flex flex-col font-rubik">
      <div className="relative">
        <img
          src={illustrationHero}
          alt="Illustration"
          className="relative z-10"
        />
        <div className="shape absolute inset-0 z-0 rounded-full"></div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-lg md:text-4xl text-very-dark-blue">
          A Simple Bookmark Manager
        </h1>
        <p className="text-grayish-blue text-md md:text-lg">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
      </div>
      <div className="flex flex-row items-center justify-evenly">
        <div>
          <button className="bg-soft-blue text-white rounded-md text-sm md:text-lg md:py-3 px-2 md:px-4 font-bold">
            Get it on Chrome
          </button>
        </div>
        <div>
          <button className="bg-grayish-blue text-white rounded-md text-sm md:text-lg md:py-3 px-2 md:px-4 font-bold">
            Get it on Firefox
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkManager;
