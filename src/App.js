import React from 'react';
import HelloWorld from './state-drills/hello-world';
import Bomb from './state-drills/bomb';
import RouletteGun from './state-drills/roulette-gun';
import './App.css';

function App() { 

	return ( 

		<main className='App'> 

			<HelloWorld />
			
			<Bomb />

			<RouletteGun />
		
		</main> 
		
		);
		
}

export default App;