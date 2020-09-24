import React from 'react'

import './styles.css'

import bannerImg from '../../assets/images/bann.jpeg'

const Banner = () => (
  <div className="banner-container">
    <img className="banner-img" src={ bannerImg } alt="Honda civic 2020"/>

    <div className="price-container">
      <span className="before-price">A partir de*</span>
      <span className="price">R$ 103.200,00</span>
      <span className="after-price">*na versão LX na cor sólida</span>
    </div>

    <div className="actions-container">
      <button className="actions">Garanta já o seu</button>
    </div>
  </div>
)

export default Banner