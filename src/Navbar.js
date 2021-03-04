import React from "react";
import logo from "./img/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const {
    openSidebar,
    openSubMenu,
    closeSidebar,
    closeSubMenu,
  } = useGlobalContext();

  const displaySubMenu = (e) => {
    console.log("Yo");
    openSubMenu();
  };
  return (
    <>
      <nav className="nav">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="Stripe Logo" />
            <button className="btn toggle-btn" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <button className="link-btn" onMouseOver={displaySubMenu}>products</button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubMenu}>developers</button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubMenu}>company</button>
            </li>
          </ul>
          <button className="btn signin-btn">Sign in</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
