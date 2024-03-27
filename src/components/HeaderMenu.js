import React from 'react'
import logo from '../assets/beeper_logo.png';
import { Link } from "react-router-dom";

function HeaderMenu() {
  return (
    <header className='header_menu'>
        <img src={logo} className="header_logo" alt="logo" />
        <div className='links_div'>
          <p className='link_text'><Link to="/">דף הבית</Link></p>
          <p className='link_text'><Link to="/CreateBeeper">ביפר</Link></p>
        </div>
    </header>
  )
}

export default HeaderMenu
