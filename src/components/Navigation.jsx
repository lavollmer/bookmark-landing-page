import React from "react";
import Logo from "../assets/logo-bookmark.svg";
import Hamburger from "../assets/icon-hamburger.svg";
import SideNav from "../components/SideNav";
import { useState } from "react";

const Navigation = () => {
  //state for the side navigation for visible and not visible
  const [visible, setVisible] = useState(false);

  //handleClick function to change the state of the side navigation
  const handleClick = (e) => {
    // prevent the default action of the button
    e.preventDefault();
    // updating the state of the side navigation
    setVisible(!visible);
    console.log("clicked");
    return;
  };

  return (
    <div className="flex flex-row justify-between m-14">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <button onClick={handleClick}>
          <img src={Hamburger} alt="hamburger" />
        </button>
      </div>
      {/* conditional rendering - if visible is true the SideNav will be rendered */}
      {visible && <SideNav />}
    </div>
  );
};

export default Navigation;
