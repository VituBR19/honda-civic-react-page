import React from "react";
import "./styles.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ImageGallery from '../../Components/ImageSlider'

import outside from "../../assets/images/gallery-exterior-civic-2020.jpg";
import inside from "../../assets/images/gallery-interior-civic-2020.jpg";

function Gallery() {
  return (
    <Router>
      <section className="gallery-container" id="gallery" data-aos="fade-right">
        <h2 className="gallery-title">Galeria</h2>
        <div className="gallery-content">
          <div className="gallery-item">
            <Link to='/gallery/exterior/touring'>
              <img src={outside} loading="lazy" alt="" />
              <span>Exterior</span>
            </Link>
          </div>

          <div className="gallery-item">
            <Link to='/gallery/interior/touring'>
              <img src={inside} loading="lazy" alt="" />
              <span>Interior</span>
            </Link>
          </div>
        </div>
      </section>

      <Switch>
        <Route path="/gallery/:type/:model" component={ImageGallery} />
      </Switch>
    </Router>
  );
}

export default Gallery;
