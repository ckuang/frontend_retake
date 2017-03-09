var ReactDOM = require("react-dom")
var React = require('react')
import {browserHistory, IndexRoute, Router, Route} from 'react-router'

import NewPerson from './newperson.jsx'
import NewExperience from './newexperience.jsx'
import Persons from './persons.jsx'
import SinglePerson from './singleperson.jsx'

let App = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Persons} />
        <Route path='/newexperience' component={NewExperience} />
        <Route path='/newperson' component={NewPerson} />
        <Route path='/person/:id' component={SinglePerson} />
    </Route>
  </Router>,
document.getElementById('root'))