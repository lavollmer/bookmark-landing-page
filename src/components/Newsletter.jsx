import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-soft-blue p-10 flex flex-col items-center justify-center text-center font-rubik">
      <div className="flex flex-col space-y-4 text-white">
        <h1 className="text-lg">35,000+ ALREADY JOINED</h1>
        <h2 className="text-2xl">Stay up-to-date with what we’re doing</h2>
      </div>
      <div>
        <form>
          <input type="submit" placeholder="example@email.com"></input>
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
