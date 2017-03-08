var ReactDOM = require("react-dom")
var React = require('react')
var $ = require('jquery')

let NewPersons = React.createClass({
  getInitialState: function() {
    return ({
      fname: '',
      lname: '',
      location: '',
      industry: ''
    })
  },

  handleChange: function(input, e){
    this.setState({
      [input]: e.target.value
    })
  },

  handleSubmit:function(e){
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "/api/persons",
      data: this.state,
      success: (data) => {
      console.log("Successful")
      }
    })
  },

  render: function() {
    return (
      <div>
        <h2>JOIN LINKEDIN TODAY:</h2>
        <form id="options" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="First Name" value={this.state.fname} onChange={this.handleChange.bind(this, "fname")} /> <br/>
          <input type="text" placeholder="Last Name" value={this.state.lname} onChange={this.handleChange.bind(this, "lname")} /> <br/>
          <input type="text" placeholder="Location" value={this.state.location} onChange={this.handleChange.bind(this, "location")} /> <br/>
            <select form="options" onChange={this.handleChange.bind(this, "industry")}>
              <option value="education">Education</option>
              <option value="technology">Technology</option>
              <option value="science">Science</option>
              <option value="mathematics">Mathematics</option>
            </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
      )
    }
  });


  module.exports = NewPersons
