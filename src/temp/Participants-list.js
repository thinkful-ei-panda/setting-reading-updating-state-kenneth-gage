import React from 'react';
import ParticipantsCard from './Participants-card';
import store from './Store';
import './participants-list.css';

function ParticipantsList() {
	
	let tmpParticipants1 = [];

	let tmpParticipants2 = [];

	store.Participants.forEach ( item => {

		if ( item.inSession === true ) tmpParticipants1.push( item );

		else tmpParticipants2.push( item );

	});

	let tmpParticipants3 = tmpParticipants1.concat( tmpParticipants2 );

	return (
		
			<div className="participants-list">
				
				{tmpParticipants3.map( listItem => (

						<ParticipantsCard key={listItem.id} name={listItem.name} avatar={listItem.avatar} inSession={listItem.inSession} onStage={listItem.onStage} />
				
				))}

			</div>

	);

}

export default ParticipantsList;