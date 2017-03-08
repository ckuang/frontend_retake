var React = require('react')
var $ = require('jquery')
var Person = require('./person.jsx')
var NewPersons = require('./newPersons.jsx')
import {Link} from 'react-router'


let Persons = React.createClass({
  getInitialState: function() {
    return ({
    persons: null
    })
  },

componentDidMount:function(){
  $.ajax({
    type:"GET",
    url: "/api/persons",
    success: (arrayOfPersonObj) => {
      console.log(arrayOfPersonObj)
      this.setState({
        persons: arrayOfPersonObj
      })
    }
  })
},

render: function() {
  if (this.state.persons) {
    return (
      <div>
        <h1>Linkedin</h1>
        <ul>
          {this.state.persons.map(function(person,idx){
            return <li key={idx}><Link to={"/person/" + person.id}><h2>{person.fname}{person.lname}</h2></Link></li>
          })}
        </ul>
        <br />
        <NewPersons />
      </div>
    )
  } else {
    return (
      <div>Loading...</div>
    )
  }
}
})

module.exports = Persons
