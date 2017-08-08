import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import App from './App.js';
import UserList from './src/UserList';
import User from './src/User';

ReactDOM.render(<Router history={hashHistory}>
                    <Route path='/' component={App} >
                        <Route path='/userlist' component={UserList} />
                        <Route path='/user' component={User} />
                    </Route>
                </Router>, 
                document.getElementById('app'));