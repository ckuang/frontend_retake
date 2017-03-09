import React from 'react'
import {render} from 'react-dom'
import $ from 'jquery';

const NewPerson = React.createClass({
	getInitialState() {
		return ({fname: '', lname: '', location: '', industry: ''})
	},
	handleChange: function(input, event) {
		this.setState({
			input: event.target.value
		})
	},
	handleSubmit: function(event) {
		event.preventDefault()
		$.ajax({
			url: '/api/persons',
			type: 'POST',
			data: this.state,
			success: (data) => {
				console.log('Person successfully added!')
			}
		})
	},
	render: function() {
		return (
			<div>
				<h1>Add New Person</h1>
					<form onSubmit={this.handleSubmit}>
						<input type="text" placeholder='First Name' onChange={this.handleChange.bind(this, 'fname')} value={this.state.fname}/>
						<input type="text" placeholder='Last Name' onChange={this.handleChange.bind(this, 'lname')} value={this.state.lname}/>
						<input type="text" placeholder='Location' onChange={this.handleChange.bind(this, 'location')} value={this.state.location}/>
						
						<select onChange={this.handleChange.bind(this, 'industry')}>
							<option value="education">Education</option>
							<option value="technology">Technology</option>
							<option value="science">Science</option>
							<option value="math">Math</option>
						</select>

						<input type='submit'/>
					</form>
			</div>
		)
	}
})

export default NewPerson;