import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import GlobomanticsLogo from "../../images/GlobomanticsLogo.png";

function Hero({ miniHero }) {
  const classes = classnames(styles.hero, "hero", "my-2", {
    "hero-sm": miniHero,
    [styles.miniHero]: miniHero,
    "hero-lg": !miniHero,
  });
  const headlineString =
    "Bringing premium property right to your finger tips".toUpperCase();

  return (
    <div>
      <div className={classes}>
        <div className="hero-body text-center">
          <img
            src={GlobomanticsLogo}
            alt="Globomantics Logo"
            style={{
              width: "250px",
              left: 0,
              top: 0,
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          />
          <h2 className="m-2 header-tagline">{headlineString}</h2>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </div>
  );
}

export default Hero;
