import React from 'react';
import tick from '../assets/vectorSVG/tick-svg.svg';
import '../stories/card.css';

function Card(props) {
  const { title, para, ...rest } = props;
  return (
    <div className="card-container">
      <div className="contain1">
        <img src={tick} className="tick" width={'100%'} />
      </div>
      <div className="contain2">
        <h3 className="head">{title}</h3>
        <p className="para">{para}</p>
      </div>
    </div>
  );
}

export default Card;
