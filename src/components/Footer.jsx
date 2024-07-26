import React from "react";
import Logo from "../assets/logo-bookmark.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center p-10">
          <img src={Logo} alt="Logo icon" />
        </div>
      </div>
      <div className="flex flex-row space-x-6 font-rubik text-very-dark-blue">
        <button className=" text-shadow">FEATURES</button>
        <button className=" text-shadow">PRICING</button>
        <button className=" text-shadow">CONTACT</button>
      </div>
      <div className="flex flex-row items-center justify-center space-x-8 mt-60">
        <img src={FacebookIcon} alt="facebook" />
        <img src={TwitterIcon} alt="twitter" />
      </div>
    </div>
  );
};

export default Footer;
