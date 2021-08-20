import React from 'react'
import Hero from '../hero'

function BaseLayout({ children, miniHero = false }) {
  return (
    <React.Fragment>
      <main role="main" className="d-flex-row mb-1">
        <Hero miniHero={miniHero} />
        {children}
      </main>

    </React.Fragment>
  )
}

export default BaseLayout
