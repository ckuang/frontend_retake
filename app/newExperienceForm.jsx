import React from 'react';
import $ from 'jquery';

const NewExperience = React.createClass({
	getInitialState(){
		return({company: '', title: '', startDate: '', endDate: '', personId: 1})
	},
	companyChange(e){
		this.setState({company: e.target.value})
	}, 
	titleChange(e){
		this.setState({title: e.target.value})
	},
	startDateChange(e){
		this.setState({startDate: e.target.value})
	},
	endDateChange(e){
		this.setState({endDate: e.target.value})
	},
	deleteExperience(e){
		e.preventDefault();
		$.ajax({
			url:'/api/experiences/' + 2,
			type: 'DELETE',
			success: ((data)=>{
				console.log('You just deleted your experience')
			})
		})
	},
	submitNewExperience(e){
		e.preventDefault();
		$.ajax({
			url: '/api/experiences',
			type: 'POST',
			data: this.state
		})
		console.log('You submitted a new experience!')
	
	},
	render(){
		return(
			<div>
			<h2> New Experience </h2>

			<form onSubmit={this.submitNewExperience}>
			StartDate:<input type="date" value={this.state.startDate} onChange={this.startDateChange}/><br/>
			EndDate:<input type="date" value={this.state.endDate} onChange={this.endDateChange}/><br/>
			<input type="text" value={this.state.company} onChange={this.companyChange} placeholder="Company"></input><br/>
			<input type="text" value={this.state.title} onChange={this.titleChange} placeholder="Title"></input><br/>
			<input type="submit" value="Add New Experience"/>
			</form>
			<button onClick={this.deleteExperience}>Remove Experience</button>
			</div>
		)
	}
});

export default NewExperience;