import React, { useState } from "react";

import "./styles.css";

import logo from "../../assets/images/logo.svg";

import ScrollspyNav from "react-scrollspy-nav";
import { useSpring, animated } from "react-spring";

function Header() {
  const [header, setheader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setheader(true);
    } else {
      setheader(false);
    }
  };

  const headerAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1000,
  });

  window.addEventListener("scroll", changeBackground);

  return (
    <animated.header style={ headerAnimation } className={header ? "header-container active" : "header-container"}>
      <ScrollspyNav
        className="scroll-spy"
        scrollTargetIds={[
          "presentation",
          "test-drive",
          "design",
          "performance",
          "quality",
          "gallery",
        ]}
        offset={20}
        activeNavClass="is-active"
        scrollDuration="500"
        headerBackground="true"
      >
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
          <a href="#performance" className="left-item">
            Performance & Conforto
          </a>
          <a href="#quality" className="left-item">
            Qualidade
          </a>
          <a href="#gallery" className="left-item">
            Galeria
          </a>
        </aside>
      </ScrollspyNav>
    </animated.header>
  );
}

export default Header;
