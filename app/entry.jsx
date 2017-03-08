var ReactDOM = require("react-dom")
var React = require('react')
import {browserHistory, IndexRoute, Router, Route} from 'react-router'
var Persons = require("./persons.jsx")
var Person = require("./person.jsx")
var NewPersons = require('./newPersons.jsx')
var NewExperience = require("./newExperience.jsx")


let App = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Persons} />
      <Route path="/persons" component={Persons} />
      <Route path="/person/:id" component={Person} />
    </Route>
  </Router>
), document.getElementById('root'))
