import React from "react";
import Logo from "../assets/logo-bookmark.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import { LiaFacebookSquare } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row bg-very-dark-blue font-rubik">
      <div>
        <div className="flex flex-col items-center justify-center p-10">
          <img src={Logo} alt="Logo icon" />
        </div>
      </div>
      <div className="flex flex-col text-white">
        <button className=" text-shadow">FEATURES</button>
        <button className=" text-shadow">PRICING</button>
        <button className=" text-shadow">CONTACT</button>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2">
        <img src={FacebookIcon} alt="facebook icon" />
        <img src={TwitterIcon} alt="twitter" />
      </div>
    </div>
  );
};

export default Footer;
