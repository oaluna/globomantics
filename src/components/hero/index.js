import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.css'
import GlobomanticsLogo from "../../images/GlobomanticsLogo.png";

function Hero({ miniHero }) {
  const classes = classnames(styles.hero, 'hero', 'my-2', {
    'hero-sm': miniHero,
    [styles.miniHero]: miniHero,
    'hero-lg': !miniHero
  })

  return (
    <div>
    <div className={classes}>
      <div className="hero-body text-center text-light">
         <img src={GlobomanticsLogo} alt='Globomantics Logo' style={{width: '400px', left: 0, top: 0}} />
        <p className="mb-0">Bringing premium property right to your finger tips</p>
      </div>
    </div>
    <div className="hero-overlay"></div>
    </div>
  )
}

export default Hero
