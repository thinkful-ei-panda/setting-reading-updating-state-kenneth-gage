import React from 'react';
import StageCard from './Stage-card';
import store from './Store';
import './stage-list.css';

function StageList() {
	
	let onstageParticipants = [];

	store.Participants.forEach ( item => {

		if ( item.onStage === true ) onstageParticipants.push( item );

	});

	return (
		
			<div className="stage-list">
				
				{onstageParticipants.map( listItem => (

						<StageCard key={listItem.id} name={listItem.name} avatar={listItem.avatar} onStage={listItem.onStage} />
				
				))}

			</div>

	);

}

export default StageList;