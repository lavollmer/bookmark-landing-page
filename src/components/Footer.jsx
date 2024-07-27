import React from "react";
import Logo from "../assets/logo-bookmark.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="flex flex-col p-4 items-center text-white font-rubik justify-center md:flex-row md:justify-between space-y-8 bg-very-dark-blue font-rubik">
      <img src={Logo} alt="Logo icon" />
      {/* <div className="flex flex-col md:flex-row md:space-x-1 text-white space-y-4"> */}
      <button>FEATURES</button>
      <button>PRICING</button>
      <button>CONTACT</button>
      {/* </div> */}
      <div className="flex flex-row space-x-2">
        <img src={FacebookIcon} alt="facebook icon" />
        <img src={TwitterIcon} alt="twitter" />
      </div>
    </div>
  );
};

export default Footer;
