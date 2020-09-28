import React from "react";
import "./styles.css";

import performanceData from './performanceData'

import Carousel from '../../Components/Carousel'

function Performance() {
  return (
    <section className="performance-container" id="performance" data-aos="fade-left">
        <h2 className="performance-title">Performance, conforto e segurança em um carro só</h2>
        <p className="performance-description">Desempenho e comodidade aliados à alta performance, o que garante ao Novo Civic, dirigibilidade eficiente, leve e segura.</p>
      <div className="performance-content">
        <Carousel datas={ performanceData } itemsToShow={ 2 }/>
      </div>
    </section>
  );
}

export default Performance;