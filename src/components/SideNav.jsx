import React from "react";
import Logo from "../assets/logo-bookmark.svg";
import CloseIcon from "../assets/icon-close.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";

const SideNav = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col font-rubik text-white bg-very-dark-blue bg-opacity-95 top-0 left-0 p-8">
      <div className="flex flex-row justify-between p-10">
        <div>
          <img src={Logo} alt="Logo icon" />
        </div>
        <div>
          <img src={CloseIcon} alt="close" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 text-2xl">
        <div className="w-full border-t border-white p-4">
          <h1 className="flex flex-row items-center justify-center">
            FEATURES
          </h1>
        </div>
        <div className="w-full border-t border-white p-4">
          <h1 className="flex flex-row items-center justify-center">PRICING</h1>
        </div>
        <div className="w-full border-t border-b border-white p-4">
          <h1 className="flex flex-row items-center justify-center">CONTACT</h1>
        </div>
        <div className="flex flex-col w-full m-10 p-6">
          <button className="border border-white rounded-lg py-2">LOGIN</button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-8 mt-60">
        <img src={FacebookIcon} alt="facebook" />
        <img src={TwitterIcon} alt="twitter" />
      </div>
    </div>
  );
};

export default SideNav;
