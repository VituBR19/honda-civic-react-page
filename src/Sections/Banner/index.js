import React from "react";

import "./styles.css";

import bannerImg from "../../assets/images/bann.jpeg";

import { useSpring, animated } from "react-spring";

const Banner = () => {
  const priceAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 2000,
    config: { duration: 2000 },
  });

  return (
    <div className="banner-container">
      <img className="banner-img" loading="lazy" src={bannerImg} alt="Honda civic 2020" />

      <animated.div className="price-container" style={priceAnimation}>
        <span className="before-price">A partir de*</span>
        <span className="price">R$ 103.200,00</span>
        <span className="after-price">*na versão LX na cor sólida</span>
      </animated.div>

      <animated.div className="actions-container" style={priceAnimation}>
        <button className="actions">Garanta já o seu</button>
      </animated.div>
    </div>
  );
};

export default Banner;
