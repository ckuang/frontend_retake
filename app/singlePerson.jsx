import React from 'react';
import $ from 'jquery';
import NewExperience from './newExperienceForm.jsx';

const SinglePerson = React.createClass({
	getInitialState(){
		return ({singles:[], experiences: [], fname: '', lname: '', location: '', industry:'',})
	},
	componentDidMount(){
		let that = this;
		$.ajax({
			url:'/api/persons/' + that.props.params.PersonId,
			type:'GET',
			success: ((data)=>{
				data ? this.setState({singles: data, experiences:data.Experiences, fname: data.fname, lname:data.lname, location:data.location, industry:data.industry}) : console.log('Error with single person object');
			})
		})
	},
	render(){
		console.log(this.props, 'PROP')
		let displaySingle = this.state.singles.map((val, indx)=>{
			return(
			<li key={indx}>{val.fname}{val.lname},{val.location},{val.industry},{val.experiences}></li>
			)
		});
		if(!this.state.singles){
			return(<div> Still waiting....</div>)
		}
		else{
			return(
				<div>
					<center>
					<h2>Charles Kuang</h2>
					<ul>
					{displaySingle}
					</ul>

					<NewExperience/>
					</center>
				</div>
			)
		}
	}
});

export default SinglePerson;