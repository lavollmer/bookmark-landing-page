import React from "react";
import illustrationHero from "../assets/illustration-hero.svg";

const BookmarkManager = () => {
  return (
    <div>
      <div>
        <img src={illustrationHero} alt="Illustr" />
      </div>
      <div>
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
      </div>
      <div>
        <div>
          <button>Get it on Chrome</button>
        </div>
        <div>
          <button>Get it on Firefox</button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkManager;
