var React = require('react')
var $ = require('jquery')
var Person = require("./person.jsx")

let NewExperience = React.createClass({
  getInitialState: function() {
    return ({
      company:'',
      title:'',
      startDate: '',
      endDate:'',
      PersonId: this.props.id
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
    url: "/api/experiences",
    data: this.state,
    success: (data) => {
    console.log("Successful")
    }
  })
},


render: function() {
  return (
    <div>
      <h2>ADD A NEW JOB:</h2>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Company Name" value={this.state.company} onChange={this.handleChange.bind(this, "company")} /> <br/>
        <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleChange.bind(this, "title")} /> <br/>
        <h4>Start Date:</h4><input type="date" value={this.state.startDate} onChange={this.handleChange.bind(this, "startDate")} /> <br/>
        <h4>Start Date:</h4><input type="date" value={this.state.endDate} onChange={this.handleChange.bind(this, "endDate")} /> <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
  }
});


module.exports = NewExperience
