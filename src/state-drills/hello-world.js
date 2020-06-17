import React from 'react';
import './hello-world.css';

class HelloWorld extends React.Component {
	
	constructor ( props ) {

		super ( props )

		this.state = { 

			who: 'World' 

		}

	}
	
	componentDidMount () {}
	
	componentWillUnmount () {}
	
	handleButtonClick = ( str ) => {
	
		console.log ();

		this.setState ({ who: str });
	
	}
	
	render () {
	
		return (
	
			<div>

				<p>Hello {this.state.who}</p>

				<button onClick={ () => this.handleButtonClick ( 'Friend' ) }>Friend</button>

				<button onClick={ () => this.handleButtonClick ( 'React' ) }>React</button>

				<button onClick={ () => this.handleButtonClick ( 'World' ) }>World</button>

			</div>
	
		)

	}

}
	

export default HelloWorld;