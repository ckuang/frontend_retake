import React from 'react';
import $ from 'jquery';

const PersonsForm = React.createClass({
	getInitialState(){
		return({fname: '', lname: '', location: '', industry: ''})
	},
	fnameChange(e){
		this.setState({fname: e.target.value})
	},
	lnameChange(e){
		this.setState({lname: e.target.value})
	},
	locationChange(e){
		this.setState({location: e.target.value})
	},
	industryChange(e){
		let getIndustry = document.getElementById('industry').value
		this.setState({industry: getIndustry})
	}, 
	submitNewPerson(e){
		e.preventDefault();
		$.ajax({
			url: '/api/persons/',
			type: 'POST',
			data: this.state
		})
		console.log('New Person Added!! :)')
	},
	render(){
		return(
			<div>
			<h2> Add New Person </h2>

			<form onSubmit={this.submitNewPerson}>
			<input type="text" value={this.state.fname} onChange={this.fnameChange} placeholder="First Name"></input><br/>
			<input type="text" value={this.state.lname} onChange={this.lnameChange} placeholder="Last Name"></input><br/>
			<input type="text" value={this.state.location} onChange={this.locationChange} placeholder="Location"></input><br/>
			<select id="industry" onChange={this.industryChange}>
				<option value="Education">Education</option>
				<option value="Technology">Technology</option>
				<option value="Mathematics">Mathematics</option>
				<option value="Science">Science</option>
			</select>
			<input type="submit" value="Add New Person"/>
			</form>
			</div>
		)
	}
});

export default PersonsForm;