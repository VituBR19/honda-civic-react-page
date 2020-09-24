import React from "react";
import "./styles.css";

import designData from './designData'

import Carousel from '../../Components/Carousel'

function Design() {
  return (
    <section className="design-container">
        <h2 className="design-title">Design & Tecnologia</h2>
        <p className="design-description">A sofisticação e o acabamento refinado aliados a tecnologia de ponta, fazem do Novo Civic Geração 10 um carro incomparável.</p>
      <div className="design-content">
        <Carousel datas={ designData } itemsToShow={ 2 }/>
      </div>
    </section>
  );
}

export default Design;