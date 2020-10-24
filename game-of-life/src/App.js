import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title.js';
import Body from './components/Body.js';

function App() {
  return (
    <div className="App">
       <Title/>
       <Body/>
    </div>
  );
}

export default App;
