import React, { useState } from 'react'
import { useParams } from 'react-router'
import { withRouter } from 'react-router-dom';


import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import galleryData from './imageData'

import './styles.css'

const ImageSlider = (props) => {
  const handleOnDragStart = (e) => e.preventDefault()

  const slideTo = (i) => setCurrent(i)

  const slidePrev = () => setCurrent(currentIndex - 1)

  const slideNext = () => setCurrent(currentIndex + 1)

  const handleSwip = ({ item }) => setCurrent(item)

  const closeGallery = () => props.history.push('/')

  const { type, model } = useParams()

  const [currentIndex, setCurrent] = useState(0)

  const thumb = (item, index) => (
    <img
      key={item}
      src={item}
      className={currentIndex === index ? 'thumb active' : 'thumb'}
      onClick={() => slideTo(index)}
      alt="civic" />
  )

  return (
    <div className="slider-image-container">
      <i onClick={closeGallery} className="fas fa-times close-gallery"></i>
      <div className="models">
        <ul>
          <li>
            <a className={model === 'touring' ? 'active-model' : null} href={`/gallery/${type}/touring`}>
              Touring
            </a>
          </li>

          <li>
            <a className={model === 'exl' ? 'active-model' : null} href={`/gallery/${type}/exl`}>
              EXL
            </a>
          </li>

          <li>
            <a className={model === 'ex' ? 'active-model' : null} href={`/gallery/${type}/ex`} >
              EX
            </a>
          </li>

          <li>
            <a className={model === 'sport' ? 'active-model' : null} href={`/gallery/${type}/sport`}>
              Sport
            </a>
          </li>

          <li>
            <a className={model === 'lx' ? 'active-model' : null} href={`/gallery/${type}/lx`}>
              LX
            </a>
          </li>
        </ul>
      </div>
      <AliceCarousel
        mouseTrackingEnabled
        onSlideChanged={handleSwip}
        dotsDisabled={true}
        slideToIndex={currentIndex}
        buttonsDisabled={true}>
        {galleryData[type][model].map((img, index) => {
          return (<img
            key={index}
            src={img}
            alt='civic'
            onDragStart={handleOnDragStart}
            className="image-slider-items" />
          )
        })}
      </AliceCarousel>

      <nav>{galleryData[type][model].map(thumb)}</nav>

      <button className="gallery-arrows" onClick={slidePrev}>
        <i className="fas fa-arrow-left"></i>
      </button>

      <button className="gallery-arrows" onClick={slideNext}>
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  )
}

export default ImageSlider;