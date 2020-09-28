import React from "react"
import "./styles.css"

import { default as ReactCarousel, consts } from 'react-elastic-carousel';
import CardItem from "../CardItem"

import leftArrow from '../../assets/images/left-arrow.svg'
import rightArrow from '../../assets/images/right-arrow.svg'

function Carousel({ datas, itemsToShow }) {

  function pagination({ pages, activePage, onClick }) {
    return (
      <div className="pagination">
        {pages.map(page => {
          const isActivePage = activePage === page
          return (
            <div
              key={page}
              onClick={() => onClick(page)}
              className={ isActivePage ? 'pagination-item actived' : 'pagination-item inactive' }
            >
            </div>
          )
        })}
      </div>
    )
  }

  function arrows({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? leftArrow : rightArrow
    return (
      <button className="arrows" onClick={onClick} disabled={isEdge}>
        <img src={pointer} loading="lazy" alt='arrows'/>
      </button>
    )
  }

  return (
    <ReactCarousel 
      itemsToShow={ itemsToShow }
      disableArrowsOnEnd={ false }
      renderArrow={ arrows }
      renderPagination={ pagination }
      itemPadding={[10, 2]}
      className="carousel-items"
    >
      { datas.map( data => (
        <CardItem data={ data } />
      )) }
    </ReactCarousel>
  );
}

export default Carousel;