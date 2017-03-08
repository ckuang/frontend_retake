import ReactDOM from "react-dom";
import React from 'react';
import {browserHistory, IndexRoute, Router, Route} from 'react-router'

//Components
// import PersonsForm from './personsForm.jsx';
import SinglePerson from './singlePerson.jsx';
import Persons from './persons.jsx';

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
		<Route path ="/" component={App}>
			<IndexRoute component={Persons}/>
			<Route path="/persons/:PersonId" component={SinglePerson}/>
		</Route>
	</Router>,
document.getElementById('root')
)
