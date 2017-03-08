import React, {Component} from 'react';
import axios from 'axios';

class NewPersons extends Component {
  constructor() {
    super()
    this.state = {
      fname: '',
      lname: '',
      location: '',
      industry: ''
    }
  }
  updateState(type, event) {
    switch (type) {
      case 'fname':
        this.setState({fname: event.currentTarget.value})
      break;
      case 'lname':
        this.setState({lname: event.currentTarget.value})
      break;
      case 'location':
        this.setState({location: event.currentTarget.value})
      break;
      case 'industry':
        this.setState({industry: event.target.value})
      break;
    }
  }
  submitForm() {
    axios({
      method: 'post',
      url: '/api/persons',
      data: this.state
    })
    .then(() => {
      alert('Created person');
    })
    .catch(() => {
      alert('There was an error submitting your response');
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitForm.bind(this)}>
          <input type="text" placeholder="First Name" onChange={this.updateState.bind(this, 'fname')}/>
          <input type="text" placeholder="Last Name" onChange={this.updateState.bind(this, 'lname')}/>
          <input type="text" placeholder="Location" onChange={this.updateState.bind(this, 'location')}/>
          <select onChange={this.updateState.bind(this, 'industry')} value={this.state.industry}>
            <option value="Education">Education</option>
            <option value="Technology">Technology</option>
            <option value="Science">Science</option>
            <option value="Mathematics">Mathematics</option>
          </select>
          <input type="submit" value="Add Person"/>
        </form>
      </div>
    )
  }
}

export default NewPersons;
