import React from "react";
import './Accordion.css';

class Accordion extends React.Component {

	static defaultProps = { sections: [] };

	state = { currentSectionIndex: 0 };

	handleButtonClick = ( index ) => {

		this.setState ({ currentSectionIndex: index })

	}

	renderButtons ( section, index ) {

		return (

			<button key={ index } onClick={ () => this.handleButtonClick ( index ) }>

					{ section.title }

			</button>

		)

	}

	renderContent ( section, index ) {

		return ( ( this.state.currentSectionIndex === index ) && <p>{section.content}</p> )
		
	}

	renderLi () {

		return this.props.sections.map ( ( section, index ) => (

			<li className="accordion-item" key={ index }>

				{ this.renderButtons ( section, index ) }

				{ this.renderContent ( section, index ) }

			</li>

		))

	}
	
	render () {

		return (

			<div>

				<ul>

					{ this.renderLi () }
					
				</ul>

			</div>

		)

	}

}

export default Accordion;