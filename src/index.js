import React from 'react';
import ReactDOM from 'react-dom';
import Simulation2d from './modules/Simulation2d';
import Simulation3d from './modules/Simulation3d';
import './index.css';
import {Router, Route, IndexRoute, Link, hashHistory, BrowseHistory} from 'react-router';

ReactDOM.render(
  (
   <div>
       <ul>
     <Link to="/">2d simulation</Link>
     <Link to="/simulation3d">3d simulation</Link>
    </ul>
   <Router history={hashHistory}>
    <Route path='/' component={Simulation2d} />
    <Route path='/simulation3d' component={Simulation3d} />
   </Router>
   </div>
   ),
  document.getElementById('root')
);
