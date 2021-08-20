import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.css'

function Hero({ miniHero }) {
  const classes = classnames(styles.hero, 'hero', 'my-2', {
    'hero-sm': miniHero,
    [styles.miniHero]: miniHero,
    'hero-lg': !miniHero
  })

  return (
    <div className={classes}>
      <div className="hero-body text-center text-light">
     <img src="../../images/GloboLogo.png" className={styles.logo} alt="logo"/>
       <h1>Globomantics</h1>
        <h6>by Oscar Armando Luna</h6>
        <p className="mb-0">Bringing premium property right to your finger tips</p>
      </div>
    </div>
  )
}

export default Hero
