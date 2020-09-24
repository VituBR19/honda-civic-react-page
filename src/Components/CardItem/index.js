import React from "react";
import "./styles.css";

function CardItem({ data }) {
  return (
    <div className="item">
      <img src={ data.image } alt={ data.image }/>
      <span>{ data.title }</span>
    </div>
  );
}

export default CardItem;