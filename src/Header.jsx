import React, { useState } from 'react';
import logo from './images/logo.svg';

const Header = () => {

  const [menu_open, setMenuOpen] = useState(false);

  const menuToggle = () => {
    if (menu_open) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  return (
    <header className='mw-1500'>
      <nav className='desktop-nav'>
        <img src={logo} alt="shortly logo" />
        <ul className='list-styles flex'>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
        <div className="account-btns">
          <button className="login">Login</button>
          <button className="sign-up btn-colors">Sign Up</button>
        </div>
      </nav>
      <nav className='mobile-nav'>
        <div className="nav-container flex">
          <img src={logo} alt="shortly logo" />
          <button onClick={menuToggle} className={`links-toggle menu-container ${menu_open ? 'close' : ''}`} aria-label='links'>
            <div class="top-bar"></div>
            <div class="middle-bar"></div>
            <div class="bottom-bar"></div>
          </button>
        </div>
        <div className={`mobile-dropdown flex ${menu_open ? 'open' : ''}`}>
          <ul className='mobile-links list-styles'>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
          <div className="account-btns flex">
            <button className="login">Login</button>
            <button className="sign-up btn-colors">Sign Up</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header