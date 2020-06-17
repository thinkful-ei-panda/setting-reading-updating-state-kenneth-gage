import React from 'react';
import './participants-card.css';

function ParticipantsCard ( props ) {
  
  let inSession = 'in session';

  let onStage = 'on stage';
  
  let classStrSession;

  let classStrStage;

  let cardVisibility;

  if ( props.inSession === true ) classStrSession = `in-session`;

  else classStrSession = `hidden`;

  if ( props.onStage === true ) {
  
    classStrStage = `on-stage`;

    classStrSession = `hidden`;

  }

  else classStrStage = `hidden`;

  if ( classStrStage === `hidden` && classStrSession === `hidden` ) cardVisibility = 'hidden';

  else cardVisibility = 'ParticipantCard';

  return (
    <div className={cardVisibility}>
      <img className="user-avatar" src={props.avatar} alt={`${props.name}'s Avatar`} />
      <div className="participant-info">
        <h6>{props.name}</h6>
        <span className={classStrSession}>{inSession}</span>
        <span className={classStrStage}>{onStage}</span>
      </div>
    </div>
  );

}

export default ParticipantsCard;