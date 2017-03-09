import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import {browserHistory, IndexRoute, Router, Route, Link} from 'react-router';



const createUser = React.createClass({
  getInitialState() {
       return {experience: [null]}
   },
   handleSubmit(event) {
     event.preventDefault();
     {
       $.ajax({
         url: '/api/experiences',
         type: "POST",
         data: {
                    company: this.company.value,
                    title: this.title.value,
                    // startDate: this.startDate.value,
                    // endDate: this.endDate.value



                }
       }).done((data)=>{
         console.log(data)
         this.props.router.push('/')
         if(this.isMounted()){
           this.setState({user: data})
         }

       }).catch((error)=>{
         console.log(error)
       })
     }
   },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
                           {/* <h1 className='titleSUP'>Get Started</h1> */}
                           <span>Company</span>
                           <input id="f1" type="text" ref={(input) => {
                               this.company = input;
                           }} required/>

                           <span>title</span>
                           <input id="f2" type="text" ref={(input) => {
                               this.title = input;
                           }} required/>
{/*
                           <span>Start date</span>
                           <input id="f3" type="text" ref={(input) => {
                               this.startDate = input;
                           }} required/>

                           <span>End Date</span>
                           <input id="f4" type="text" ref={(input) => {
                               this.endDate = input;
                           }} required/> */}

                           <button type="submit">Sign Up</button>
                       </form>
      </div>
    )
  }
})

export default createUser;
