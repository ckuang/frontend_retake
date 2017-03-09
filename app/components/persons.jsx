import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import createUser from './userForm.jsx';


const People = React.createClass({
  getInitialState(){
    return{
      persons: []
    }
  },
  componentDidMount() {
    {
        $.ajax({
        url: '/api/persons',
        type: "GET"
    })
        .done((data) => {
          console.log(data)
            this.setState({persons: data})
        })
    }
},
  render : function (){
    return (
      <div>

        <h1>Persons</h1>
        {
          this.state.persons.map(function(val,idx){
            return (
              <div key={idx}>

                <Link to={'/singlePerson'}><h1>{val.fname} {val.lname}</h1></Link>
                <h2>{val.location}</h2>
                <h2>{val.industry}</h2>

              </div>

            )
          })
        }
        <createUser />
      </div>
    )
  }
})



export default People;
