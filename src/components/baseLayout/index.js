import React from 'react'
import Hero from '../hero'

function BaseLayout({ children, miniHero = false }) {
  return (
    <React.Fragment>
      <main role="main" className="mb-3">
        <Hero miniHero={miniHero} />
        {children}
      </main>
      <footer className="text-center mb-5">
        Developed By
        {' '}
        <a
          href="https://twitter.com/jpreecedev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jon Preece
        </a>
        , 2019
      </footer>
    </React.Fragment>
  )
}

export default BaseLayout
