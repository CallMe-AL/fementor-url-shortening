import React from 'react';
import logo from './images/logo.svg';
// import facebook from './images/icon-facebook.svg';
// import instagram from './images/icon-instagram.svg';
// import pinterest from './images/icon-pinterest.svg';
// import twitter from './images/icon-twitter.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
  return (
    <footer>
      <div className="footer-wrap">
        <img className='logo' src={logo} alt="shortly logo" />
        <nav>
          <ul className="footer-links list-styles">
            <li className='footer-link'><span>Features</span>
              <ul className='list-margin'>
                <li>
                  <a className='gray' href="#">Link Shortening</a>
                </li>
                <li>
                  <a className='gray' href="#">Branded Links</a>
                </li>
                <li>
                  <a className='gray' href="#">Analytics</a>
                </li>
              </ul>
            </li>
            <li className='footer-link'><span>Resources</span>
              <ul className='list-margin'>
                <li>
                  <a className='gray' href="#">Blog</a>
                </li>
                <li>
                  <a className='gray' href="#">Developers</a>
                </li>
                <li>
                  <a className='gray' href="#">Support</a>
                </li>
              </ul>
            </li>
            <li className='footer-link'><span>Company</span>
              <ul className='list-margin'>
                <li>
                  <a className='gray' href="#">About</a>
                </li>
                <li>
                  <a className='gray' href="#">Our Team</a>
                </li>
                <li>
                  <a className='gray' href="#">Careers</a>
                </li>
                <li>
                  <a className='gray' href="#">Contact</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <nav className="social-links">
          <ul className='flex'>
            <li>
              <a href="#" className='social-link'><FontAwesomeIcon icon="fa-brands fa-square-facebook" /></a>
            </li>
            <li>
              <a href="#" className='social-link'><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
            </li>
            <li>
              <a href="#" className='social-link'><FontAwesomeIcon icon="fa-brands fa-pinterest" /></a>
            </li>
            <li>
              <a href="#" className='social-link'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer