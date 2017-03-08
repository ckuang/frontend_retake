import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import PersonsForm from './personsForm.jsx';


const Persons = React.createClass({
	getInitialState(){
		return({persons: []});
	},
	componentDidMount(){	
		$.ajax({
			url:'/api/persons/',
			type: 'GET',
			success: ((data)=>{
				data ? this.setState({persons: data}) : console.log('Error with persons object');
			})
		})
	},
	render(){
		console.log(this.props, 'PROP')
		let displayPersonsInfo = this.state.persons.map((val,indx)=>{
			// console.log(val.id, 'EHY')
			return(
				<li key={indx}><Link className="ppl"to={"/persons/" + val.id}>{val.fname}{val.lname}</Link></li>
			)
		})
		if(!this.state.persons){
			return(<div>Still Waiting....</div>)
		}
		else{
			return(
				<div>
					<center>
					<h2> Everyone In The World:</h2>
					<Link>{this.state.persons.name}</Link>
					<ol>
					{displayPersonsInfo}
					</ol>
					<PersonsForm />
					</center>
				</div>
			)
		}		
	}
});

export default Persons;