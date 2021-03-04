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
    const page = e.target.textContext;
    const tempBtn = e.target.getBoundingClientRect();
    // tempBtn sum of left + right divided by 2 to get the center:
    const center = (tempBtn.left + tempBtn.right) / 2;
    // tempBtn bottom minus 3 to lift it 3 px up:
    const bottom = tempBtn.bottom - 3;
    openSubMenu(page, { center, bottom });
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
              <button className="link-btn" onMouseOver={displaySubMenu}>
                products
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubMenu}>
                developers
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubMenu}>
                company
              </button>
            </li>
          </ul>
          <button className="btn signin-btn">Sign in</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
