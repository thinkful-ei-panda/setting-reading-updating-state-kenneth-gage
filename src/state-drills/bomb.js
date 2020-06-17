import React from 'react';
import './bomb.css';

class Bomb extends React.Component {
	
	constructor ( props ) {

		super ( props )

		this.state = { 

			count: 10,

		}

	}
	
	newStr = 'Tock';

	componentDidMount () {

		this.interval = setInterval ( () => {

			if ( this.state.count === 0 ) {
				
				this.newStr = 'Boom!';

				clearInterval ( this.interval )

			}	

			if ( this.state.count >= 0 ) {

				this.setState ({

					count: this.state.count - 1

				})

				console.log ( this.state.count )

			}

			if ( this.state.count % 2 === 0 ) this.newStr = 'Tock';

			else this.newStr = 'Tick';

		}, 1000 )
		   
	}
	
	componentWillUnmount () {

		clearInterval ( this.interval )

	}
	
	render () {

		return (
	
			<div>

				<p>{ this.newStr }</p>

			</div>
	
		)

	}

}
	

export default Bomb;