import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router';


class App extends React.Component{
  render(){
    return (
      <div>
        <ul>
          <Link to="/" activeClassName = "activetab">2d simulation</Link>
          <Link to="/simulation3d"  activeClassName = "activetab">3d simulation</Link>
        </ul>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
