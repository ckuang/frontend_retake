import ReactDOM from 'react-dom';
import React from 'react';
import {browserHistory, IndexRoute, Router, Route, Link} from 'react-router';

import People from './components/persons.jsx';

import SinglePerson from './components/singlePerson.jsx'
import createUser from './components/userForm.jsx'



const App = React.createClass({
    render: function() {
        return (
            <div>
                <createUser />
                {this.props.children}
            </div>
        )
    }
})

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={People}/>

            <Route path="/singlePerson/:id" component={SinglePerson} />
            <Route path="/userForm" component={createUser} />
        </Route>
    </Router>
), document.getElementById('root'));
