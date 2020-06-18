import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Accordion from './Accordion'

describe ( `Accordion Component`, () => {
	// array of objects, each with a name and content
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

	it ( 'renders without errors', () => {

		const div = document.createElement ( 'div' );
	
		ReactDOM.render ( <Accordion />, div );
	
		ReactDOM.unmountComponentAtNode ( div );
	
  	})

	it ( 'renders empty given no tabs', () => {

		const wrapper = shallow ( <Accordion /> )
		
		expect ( toJson ( wrapper ) ).toMatchSnapshot ()

	})

	it ( 'renders the first tab by default', () => {

		const wrapper = shallow ( <Accordion sections = { sectionsProp } /> )
		
		expect ( toJson ( wrapper ) ).toMatchSnapshot ()

	})

	it ( 'closes the first tab and opens any clicked tab', () => {
		
		const wrapper = shallow ( <Accordion sections = { sectionsProp } /> )

		wrapper.find ( 'button' ).at ( 1 ).simulate ( 'click' )

		expect ( toJson ( wrapper ) ).toMatchSnapshot ()

	  })

})