import "./Card.css";
import React from 'react';
function Card(props) {
  let cardCss = props.className;
  return <div className={cardCss}>{props.children}</div>;
}

export default Card;
