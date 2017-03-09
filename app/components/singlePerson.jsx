import React from 'react';
import $ from 'jquery';
import {
    IndexRoute,
    Link,
    Router,
    Route,
    browserHistory,
    hashHistory
} from 'react-router';


const SinglePerson = React.createClass({

  getInitialState(){
    return{
      singlePerson: []
    }
  },
  componentDidMount() {
    {
      var id = this.props.params.id;
        $.ajax({
        url: '/api/persons/' + id,
        type: "GET"
    })
        .done((data) => {
          console.log(data)
            this.setState({singlePerson: data})
        })
    }
},
  render: function(){
    return (
      <div>
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

      </div>
    )
  }
})



export default SinglePerson;
