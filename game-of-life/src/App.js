import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title.js';
import Body from './components/Body.js';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar/>
            <Title/>
            <Body/>
          </Route>
          <Route path="/about">
            <Navbar/>
            <About/>
          </Route>
        </Switch>
    </Router>
  </div>
  );
}

export default App;
