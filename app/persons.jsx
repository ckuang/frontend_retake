import React, {Component} from 'react';
import axios from 'axios';
import { browserHistory, Link } from 'react-router';

class Persons extends Component {
  constructor() {
    super()
    this.state = {
      personsArray: null,
      currentId: null
    }
  }
  componentDidMount() {
    axios({
      method: "get",
      url: "/api/persons",
    })
    .then((data) => {
      this.setState({personsArray: data.data})
    })
  }
  updateState(ind) {
    this.setState({currentId: ind});
    console.log(this.state)
  }
  render() {
    let display = null;
    let liArray = [];
    if (this.state.personsArray) {
      this.state.personsArray.forEach((ele, ind) => {
        liArray.push(
          <li key={ind}>
            <br/>
            First Name: {ele.fname}
            <br/>
            Last Name: {ele.lname}
            <br/>
            Location: {ele.location}
            <br/>
            Industry: {ele.industry}
            <br/>
            <Link onClick={this.updateState.bind(this, ind + 1)} to={`/experiences/${ind + 1}`}>Experiences</Link>
          </li>
        )
      })
      display = <ul>{liArray}</ul>;
    }
    return (
      <div>
        {display}
        {this.props.children}
      </div>
    )
  }
}

export default Persons;
