import React from "react";
import "./styles.css";

import car from "../../assets/images/catalogo_civic_2020.jpg";
import accessories from "../../assets/images/civic_0.jpg";

function Catalog() {
  return (
    <section className="catalog-container">
      <div className="catalog car">
        <img src={ car } alt="Catalogo do veiculo"/>
        
        <div className="catalog-info">
          <h2>Catálogo do Veículo</h2>

          <p>Confira o catálogo do Civic 2020</p>

          <div className="catalog-actions">
            <a href="#">Visualizar PDF</a>
            <a href="#">Baixar PDF</a>
          </div>
        </div>
      </div>

      <div className="catalog accessories">
        <img src={ accessories } alt="Catalogo do veiculo"/>
        
        <div className="catalog-info">
          <h2>Catálogo de Acessórios</h2>

          <p>Confira o catálogo do Civic 2020</p>

          <div className="catalog-actions">
            <a href="#">Visualizar PDF</a>
            <a href="#">Baixar PDF</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
