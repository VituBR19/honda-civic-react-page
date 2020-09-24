import React from "react";

import "./styles.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="subitems">
        <h3>Modelos</h3>

        <ul>
          <li>
            <a href="">Fit</a>
          </li>
          <li>
            <a href="">WR-V</a>
          </li>
          <li>
            <a href="">HR-V</a>
          </li>
          <li>
            <a href="">CR-V</a>
          </li>
          <li>
            <a href="">City</a>
          </li>
          <li>
            <a href="">Civc</a>
          </li>
          <li>
            <a href="">Civic Si</a>
          </li>
          <li>
            <a href="">Accord</a>
          </li>
        </ul>
      </div>

      <div className="subitems">
        <h3>Quero um Honda</h3>

        <ul>
          <li><a href="">Agendar test drive</a></li>
          <li><a href="">Encontrar uma concessionária</a></li>
          <li><a href="">Solicitar contato</a></li>
        </ul>
      </div>

      <div className="subitems">
        <h3>Institucional</h3>

        <ul>
          <li><a href="">Prêmios</a></li>
          <li><a href="">Fale com a Honda</a></li>
          <li><a href="">Site Corporativo</a></li>
          <li><a href="">Pós-vendas Automóveis</a></li>
        </ul>
      </div>

      <div className="subitems">
        <h3>Recall</h3>

        <ul>
          <li><a href="">Recall</a></li>
        </ul>
      </div>

      <div className="subitems">
        <h3>myHonda</h3>

        <ul>
          <li><a href="">Login</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
