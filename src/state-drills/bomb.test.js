import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Bomb from './bomb';

describe ( `Bomb Component`, () => {
	
	it ( 'renders without crashing', () => {
	  
		const div = document.createElement ( 'div' );
		
		ReactDOM.render ( <Bomb />, div );
		
		ReactDOM.unmountComponentAtNode ( div );

	})

	it ( 'renders the UI as expected', () => {

	  expect(

		renderer.create ( <Bomb /> ).toJSON ()

	  ).toMatchSnapshot ()

	})

})