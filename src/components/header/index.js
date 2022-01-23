import React from "react";
import GlobomanticsLogo from "../../images/GlobomanticsLogo.png";
import "./styles.module.css";

function Header() {
  return (
    <header className="header header-lg">
      <div className="headerContainer">
        <div className="logoContainer">
          <img
            className="logo"
            src={GlobomanticsLogo}
            alt="globomantics-logo"
          />
        </div>
        <div className="nav">
          <div className="link">
            <ul style={{ listStyle: "none" }}>
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/">
                <li>Listings</li>
              </a>
              <a href="/">
                <li>Featured</li>
              </a>
              <a href="/">
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
