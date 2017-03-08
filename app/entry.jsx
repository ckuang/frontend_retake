var ReactDOM = require("react-dom");
var React = require('react');
import {browserHistory, IndexRoute, Router, Route} from 'react-router';
import routes from './routes';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
)
