import React from 'react'
import {render} from 'react-dom'
import $ from 'jquery';

const SinglePerson = React.createClass({
	getInitialState() {
		return {persons: []}
	},
	componentDidMount(){
     {
      $.ajax({
        url: '/api/persons/:id',
        type: "GET"
      })
      .done((data) => {
        this.setState({persons: data})
      })
    }
  },
	render: function() {
		return (
			<div>
				<h1>Single Person!</h1>
			</div>
		)
	}
})

export default SinglePerson;