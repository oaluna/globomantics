import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

function Hero({ miniHero }) {
  const classes = classnames(styles.hero, "hero", "my-2", {
    "hero-sm": miniHero,
    [styles.miniHero]: miniHero,
    "hero-lg": !miniHero
  });
  const headlineString = "Bringing premium property right to your finger tips";

  return (
    <div>
      <div className={classes}>
        <div className="hero-body text-left">
          <div className="hero-overlay"></div>
          <h2 className="ml-2 mr-0 w-75 header-tagline" style={{ zIndex: 10 }}>
            {headlineString}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
