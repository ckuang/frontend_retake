import React from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router'
import $ from 'jquery';

import NewPerson from './newperson.jsx'

const Persons = React.createClass({
	getInitialState() {
		return {persons: []}
	},
	componentDidMount() {
		{
			$.ajax({
				type: 'GET',
				url: '/api/persons',
				success: ((data) => {
					this.setState({persons: data})
				})
			})
		}
	},
	render: function() {
		return (
			<div>
				<h1>All Persons</h1>
					<ul>
						{this.state.persons.map(function(person, index) {
							return <li key={index}><Link to={'person/' + person.id}>{person.fname} {person.lname}</Link> <br/> {person.location} <br/> {person.industry}</li>
						})}
					</ul>
			<NewPerson />
			</div>
		)
	}
})

export default Persons