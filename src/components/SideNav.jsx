import React from "react";
import Logo from "../assets/logo-bookmark.svg";
import CloseIcon from "../assets/icon-close.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";

const SideNav = () => {
  return (
    <div className="flex flex-col font-rubik text-white bg-very-dark-blue">
      <div className="flex flex-row">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div>
          <img src={CloseIcon} alt="close" />
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <h1>FEATURES</h1>
        </div>
        <div>
          <h1>PRICING</h1>
        </div>
        <div>
          <h1>CONTACT</h1>
        </div>
        <div>
          <button>LOGIN</button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2">
        <img src={FacebookIcon} alt="facebook" />
        <img src={TwitterIcon} alt="twitter" />
      </div>
    </div>
  );
};

export default SideNav;
