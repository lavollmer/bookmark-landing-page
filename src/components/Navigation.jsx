import React from "react";
import Logo from "../assets/logo-bookmark.svg";
import Hamburger from "../assets/icon-hamburger.svg";
import SideNav from "../components/SideNav"

const Navigation = () => {
  return (
    <div className="flex flex-row justify-between m-14">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <img src={Hamburger} alt="hamburger" />
      </div>
    </div>
  );
};

export default Navigation;
