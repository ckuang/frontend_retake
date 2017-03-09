import React from 'react'
import {render} from 'react-dom'
import $ from 'jquery';

const NewExperience = React.createClass({
	getInitialState(){
		return ({company: '', title:'', startDate:'', endDate:'', PersonId: this.props.id})
	},
	handleChange: function(input, event) {
		this.setState({
			input: event.target.value
		})
	},
	handleSubmit: function(event) {
		event.preventDefault()
		$.ajax({
			type: 'POST',
			url: '/api/experiences',
			data: this.state,
			success: (data) => {
				console.log('Experience successfully added!')
			}
		})
	},
	render: function() {
		return (
			<div>
				<h1>New Experience</h1>
				<form onSubmit={this.handleSubmit}>
						<input type="text" placeholder='Company' onChange={this.handleChange.bind(this, 'company')} value={this.state.company} />
						<input type="text" placeholder='Title' onChange={this.handleChange.bind(this, 'title')} value={this.state.title} />
						<input type="text" placeholder='Start Date' onChange={this.handleChange.bind(this, 'startDate')} value={this.state.startDate} />
						<input type="text" placeholder='End Date' onChange={this.handleChange.bind(this, 'endDate')} value={this.state.endDate} />
						<input type='submit'/>
					</form>
			</div>
		)
	}
})

export default NewExperience;