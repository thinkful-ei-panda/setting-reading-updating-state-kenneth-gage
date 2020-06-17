import React from 'react';
import $ from 'jquery';
import ParticipantsList from './Participants-list';
import ChatList from './Chat-list'
import StageList from './Stage-list'
import './App.css';

const init = () => {

	$ ( 'body' ).on ( 'click', '.header-sidebar-btn', e => {
		
		let identifier = e.currentTarget.id.charAt ( e.currentTarget.id.length - 1 ); 
		
		if ( identifier === '1' ) {
			$ ( '.chat-list' ).css ( 'display', 'block' );
			$ ( '.participants-list' ).css ( 'display', 'none' );
	   	}

		else if ( identifier === '2' ) {
		 	$ ( '.chat-list' ).css ( 'display', 'none' );
		 	$ ( '.participants-list' ).css ( 'display', 'block' );
		}

	});

};

init ();

function App() {

	return (

		 <div className="App">
			 <section className="sidebar">
			 	<div className="side-bar-tabs">
					<div id="header-sidebar-btn-1" className="header-sidebar-btn">Chat</div>
				 	<div id="header-sidebar-btn-2" className="header-sidebar-btn">Participants</div>
			 	</div>
				<ParticipantsList />
				<ChatList />
			 </section>
			 <section className="stage">
			 	<StageList />
			 </section>
			 <section className="control-bar-container">
			 	<div className="control-bar"></div>
			 </section>
		 </div>

	);

}

export default App;
