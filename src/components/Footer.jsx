import React from "react";
import Logo from "../assets/logo-bookmark.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-20 p-4 items-center text-white font-rubik justify-center space-y-8 md:space-y-0 bg-very-dark-blue font-rubik">
      <img src={Logo} alt="Logo icon" />
      <button>FEATURES</button>
      <button>PRICING</button>
      <button>CONTACT</button>

      <div className="flex flex-row space-x-2 md:space-x-6">
        <img src={FacebookIcon} alt="facebook icon" />
        <img src={TwitterIcon} alt="twitter" />
      </div>
    </div>
  );
};

export default Footer;
