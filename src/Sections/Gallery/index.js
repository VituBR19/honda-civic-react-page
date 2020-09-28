import React from "react";
import "./styles.css";

import outside from "../../assets/images/gallery-exterior-civic-2020.jpg";
import inside from "../../assets/images/gallery-interior-civic-2020.jpg";

function Gallery() {
  return (
    <section className="gallery-container" id="gallery">
      <h2 className="gallery-title">Galeria</h2>
      <div className="gallery-content">
        <div className="gallery-item">
          <img src={outside} loading="lazy" alt="" />

          <span>Exterior</span>
        </div>

        <div className="gallery-item">
          <img src={inside} loading="lazy" alt="" />

          <span>Interior</span>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
