import React from 'react'
import logo from './GloboLogo.png'

const Header = () => (
  <header className='row'>
    <div className='mx-md-0 px-md-0'>
      <img src={logo} className='logo' alt='logo' />
    </div>
    <div className='col-md-7 mt-5 subtitle'>
      <h1>REAL ESTATE DEMO</h1>
      <hr />
      <small>by Oscar Armando Luna</small>
    </div>
  </header>
)

export default Header
