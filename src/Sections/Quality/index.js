import React from "react";
import "./styles.css";

import qualityData from './qualityData'

function Quality() {
  return (
    <section className="quality-container">
        <h2 className="quality-title">Qualidade comprovada</h2>
        <p className="quality-description">Tudo no novo Civic foi pensado para seu conforto</p>
      <div className="quality-content">
        { qualityData.map((data, index) => (
          <div className="content-item" key={index}>
            <img src={ data.image } alt={ data.desc }/>
            <span>{ data.title }</span>
            <p>{ data.desc }</p>
          </div>
        )) }
      </div>
    </section>
  );
}

export default Quality;