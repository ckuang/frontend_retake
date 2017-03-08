var React = require('react')
var $ = require('jquery')
var NewExperience = require("./newExperience.jsx")

let Person = React.createClass({
  getInitialState: function() {
    return ({
      persons: null,
      experiences: []
    })
  },

  componentDidMount: function(){
    $.ajax({
      type: "GET",
      url: "/api/persons/" + this.props.params.id,
      success: (onePerson) => {
        console.log(onePerson)
        this.setState({
          persons: onePerson
        })
      }
    })
  },

  render: function() {
    if (this.state.persons) {
      let person = this.state.persons;
      return (
        <div>
          <ul>
            <h2>{person.fname} {person.lname}</h2>
            <h3>{person.industry} / {person.location}</h3><br />

          {person.Experiences.map(function(experience,idx){
              return <li key={idx}>
                <h2>{experience.company}<br /></h2>
                <h3>{experience.title}<br /></h3>
                <h4>started: {experience.startDate}<br /></h4>
                <h4>ended: {experience.endDate}</h4></li>
            })}
          </ul>
          <div><br />
            <NewExperience id={this.props.params.id} />
          </div>
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
})

module.exports = Person
