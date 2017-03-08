import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class Experiences extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      experiences: null,
      currentId: null,
      displayEditForm: false,
      editForm: null,
      newExperienceObj: {
        company: '',
        title: '',
        startDate: null,
        endDate: null,
        PersonId: null
      },
      updateExperienceObj: {
        company: '',
        title: '',
        startDate: null,
        endDate: null,
        PersonId: null
      }
    };
  }

  componentDidMount() {
    let newState = this.state;
    newState.newExperienceObj.PersonId = this.props.params.id;
    newState.updateExperienceObj.PersonId = this.props.params.id;
    this.setState({newState});
      axios({
        method: 'get',
        url: `/api/persons/${this.props.params.id}`
      }).then((data) => {
        this.setState({
          name: data.data.fname + ' ' + data.data.lname,
          experiences: data.data.Experiences,
          currentId: data.data.id
        })
      })
  }

  deleteExperience(id, ind) {
    axios({
      method: 'delete',
      url: `/api/experiences/${id}`
    })
    .then(() => {
      let newExperienceArray = this.state.experiences;
      newExperienceArray.splice(ind, 1);
      this.setState({experiences: newExperienceArray});
    })
  }

  updateNewExperience(type, event) {
    let newStateObj = this.state
    switch (type) {
      case 'company':
        newStateObj.newExperienceObj.company = event.currentTarget.value
        this.setState({newStateObj})
      break;
      case 'title':
        newStateObj.newExperienceObj.title = event.currentTarget.value
        this.setState({newStateObj})
      break;
      case 'startDate':
        newStateObj.newExperienceObj.startDate = event.currentTarget.value
        this.setState({newStateObj})
      break;
      case 'endDate':
        newStateObj.newExperienceObj.endDate = event.currentTarget.value
        this.setState({newStateObj})
      break;
    }
  }

  updateEditExperience(type, event) {
    let newStateObj = this.state
    switch (type) {
      case 'company':
        newStateObj.updateExperienceObj.company = event.currentTarget.value
        this.setState({newStateObj})
      break;
      case 'title':
        newStateObj.updateExperienceObj.title = event.currentTarget.value
        this.setState({newStateObj})
      break;
      case 'startDate':
        newStateObj.updateExperienceObj.startDate = event.currentTarget.value
        this.setState({newStateObj})
      break;
      case 'endDate':
        newStateObj.updateExperienceObj.endDate = event.currentTarget.value
        this.setState({newStateObj})
      break;
    }
  }

  submitNewExperience(event) {
    event.preventDefault()
    axios({
      method: 'post',
      url: '/api/experiences',
      data: this.state.newExperienceObj
    })
    .then((data) => {
      let newExperienceArray = this.state.experiences;
      newExperienceArray.push(this.state.newExperienceObj);
      this.setState({experiences: newExperienceArray});
    })
  }

  submitEditExperience(id, event) {
    event.preventDefault();
    axios({
      method: 'put',
      url: `/api/experiences/${id}`,
      data: this.state.updateExperienceObj
    })
    .then(() => {
      this.setState({
        displayEditForm: false,
        editForm: null,
      })
      axios({
        method: 'get',
        url: `/api/persons/${this.props.params.id}`
      }).then((data) => {
        this.setState({
          name: data.data.fname + ' ' + data.data.lname,
          experiences: data.data.Experiences,
          currentId: data.data.id
        })
      })
    })
  }

  createEditExperienceForm(company, title, startDate, endDate, id, ind) {
    let editForm = (
      <div>
      Edit Experience
      <form onSubmit={this.submitEditExperience.bind(this, id)}>
        <input type="text" placeholder={company} onChange={this.updateEditExperience.bind(this, 'company')}/>
        <br/>
        <input type="text" placeholder={title} onChange={this.updateEditExperience.bind(this, 'title')}/>
        <br/>
        Start Date:
        <input type="date" onChange={this.updateEditExperience.bind(this, 'startDate')}/>
        <br/>
        End Date:
        <input type="date" onChange={this.updateEditExperience.bind(this, 'endDate')}/>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
      </div>
    )
    this.setState({editForm: editForm});
    this.setState({displayEditForm: true});
  }

  render() {

    let display = null;

    if (this.state.experiences) {
      display = [];
      this.state.experiences.forEach((ele, ind) => {
        display.push(
          <li key={ind}>
            <br/>
            Company: {ele.company}
            <br/>
            Title: {ele.title}
            <br/>
            Started: {ele.startDate}
            <br/>
            Ended: {ele.endDate}
            <br/>
            <button onClick={this.createEditExperienceForm.bind(this, ele.company, ele.title, ele.startDate, ele.endDate, ele.id, ind)}>Edit</button>
            <button onClick={this.deleteExperience.bind(this, ele.id, ind)}>Delete</button>
          </li>
        )
      })
    }

    return(
      <div>
        <Link to="/">Back</Link>
        <h2>{this.state.name}</h2>
        <br/>
        <h4>Experiences:</h4>
        <ul>
          {display}
        </ul>
        {this.state.editForm}
        Add New Experience
        <form onSubmit={this.submitNewExperience.bind(this)}>
          <input type="text" placeholder="Company" onChange={this.updateNewExperience.bind(this, 'company')}/>
          <br/>
          <input type="text" placeholder="Title" onChange={this.updateNewExperience.bind(this, 'title')}/>
          <br/>
          Start Date:
          <input type="date" onChange={this.updateNewExperience.bind(this, 'startDate')}/>
          <br/>
          End Date:
          <input type="date" onChange={this.updateNewExperience.bind(this, 'endDate')}/>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Experiences;
