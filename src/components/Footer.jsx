import React from "react";
import Logo from "../assets/logo-bookmark.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import { LiaFacebookSquare } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-2 items-center md:justify-between justify-center space-y-8 p-10 md:flex-row bg-very-dark-blue font-rubik">
      <div>
        <div className="flex flex-col">
          <img src={Logo} alt="Logo icon" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4 text-white space-y-4">
        <button className=" text-shadow">FEATURES</button>
        <button className=" text-shadow">PRICING</button>
        <button className=" text-shadow">CONTACT</button>
      </div>
      <div className="flex flex-row space-x-2">
        <img src={FacebookIcon} alt="facebook icon" />
        <img src={TwitterIcon} alt="twitter" />
      </div>
    </div>
  );
};

export default Footer;
