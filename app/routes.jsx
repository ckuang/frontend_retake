import React from 'react';
import { Route, Link , IndexRoute } from 'react-router';
import Persons from './persons';
import NewPersons from './new-persons';
import Experiences from './experiences';

export default (
    <Route path='/' component={Persons}>
      <IndexRoute component={NewPersons}/>
      <Route path='/experiences/:id' component={Experiences}/>
    </Route>
);
