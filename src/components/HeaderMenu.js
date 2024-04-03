import React from 'react'
import logo from '../assets/beeper_logo.png';
import { Link } from "react-router-dom";

function HeaderMenu() {
  return (
    <header className='neumorphism header_menu'>
        <img src={logo} className="header_logo" alt="logo" />
        <div className='links_div'>
          <p className='neumorphism link_text'><Link to="/">בית</Link></p>
          <p className='neumorphism link_text'><Link to="/CreateBeeper">ביפר</Link></p>
        </div>
    </header>
  )
}

export default HeaderMenu
