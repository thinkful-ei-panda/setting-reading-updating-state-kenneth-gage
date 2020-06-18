import React from 'react';
import HelloWorld from './state-drills/hello-world';
import Bomb from './state-drills/bomb';
import RouletteGun from './state-drills/roulette-gun';
import Tabs from './state-drills/Tabs';
import Accordion from './state-drills/Accordion';
import './App.css';

const tabsProp = [

	{ name: 'First tab',
	  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
	{ name: 'Second tab',
	  content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
	{ name: 'Third tab',
	  content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },

];

const sectionsProp = [
	{
	  title: 'Section 1',
	  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	{
	  title: 'Section 2',
	  content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
	},
	{
	  title: 'Section 3',
	  content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
	},
  ]

class App extends React.Component {

	render() {

		return (

			<div>

				<HelloWorld tabs = { tabsProp } />

				<Bomb tabs = { tabsProp } />

				<RouletteGun tabs = { tabsProp } />

				<Tabs tabs = { tabsProp } />

				<Accordion sections = { sectionsProp } />

			</div>

		)

	}

}

export default App;