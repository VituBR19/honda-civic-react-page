import React from 'react';
import './styles.css';

function Presentation() {
  return (
    <section className="presentation-container" id="presentation">
      <h2 className="presentation-title">Novo Civc 2020 - Evoluir Sempre</h2>

      <div className="presentation-content">
        <iframe 
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SMUxgM7CkPM"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
        </iframe>
      </div>
    </section>
  );
}

export default Presentation;
