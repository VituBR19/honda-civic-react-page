import React, { useState } from "react";

import "./styles.css";

import logo from "../../assets/images/logo.svg";

function Header() {
  const [header, setheader] = useState(false);
  
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setheader( true )
    } else {
      setheader( false )
    }
  }

  window.addEventListener('scroll', changeBackground)
  
  return (
    <header className={ header ? 'header-container active' : 'header-container' }>
      <aside className="header-left-content">
        <a href="#presentation" className="left-item">
          Apresentação
        </a>
        <a href="#test-drive" className="left-item">
          Test Drive Virtual
        </a>
        <a href="#design" className="left-item">
          Design
        </a>
      </aside>

      <aside className="header-logo">
        <img src={logo} alt="Honda" />
      </aside>

      <aside className="header-rigth-content">
        <a href="#presentation" className="left-item">
          Performance & Conforto
        </a>
        <a href="#test-drive" className="left-item">
          Test Drive Virtual
        </a>
        <a href="#design" className="left-item">
          Design
        </a>
      </aside>
    </header>
  );
}

export default Header;
