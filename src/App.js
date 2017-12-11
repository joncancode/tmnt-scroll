import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro';
import Leo from './components/Leo';
import Raph from './components/Raph';
import Don from './components/Don';
import Mike from './components/Mike';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Leo />
        <Raph />
        <Don />
        <Mike />
      </div>
    );
  }
}

export default App;
