import React from 'react';
import './stage-card.css';

function StageCard ( props ) {

  return (
    <div className='stage-card'>
      <div className="participant-info">
        <h6>{props.name}</h6>
      </div>
      <img className="stage-avatar" src={props.avatar} alt={`${props.name}'s Avatar`} />
      
    </div>
  );

}

export default StageCard;