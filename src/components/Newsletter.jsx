import React from "react";
import { useState } from "react";

const Newsletter = () => {
  return (
    <div className="bg-soft-blue p-10 flex flex-col items-center justify-center text-center font-rubik">
      <div className="flex flex-col space-y-4 text-white">
        <h1 className="text-lg">35,000+ ALREADY JOINED</h1>
        <h2 className="text-2xl">Stay up-to-date with what we’re doing</h2>
      </div>
      <div>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <input
            type="email"
            placeholder="name@mail.com"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900 rounded-lg w-full py-3 px-4"
          />
        </form>
      </div>
      <div className="flex flex-col w-full">
        <button className="bg-soft-red font-bold text-white rounded-md text-md py-4 md:text-lg md:py-3 px-4 ">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
