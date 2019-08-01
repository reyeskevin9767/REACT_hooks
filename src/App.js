import React, { Component } from 'react';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import Toggler from './Toggler';
import SimpleFormClass from './SimpleFormClass';
import SimpleFormHooks from "./hooks/SimpleFormHooks";
import SimpleForminputHook from "./hooks/SimpleForminputHook";
import "./App.css";
import Clicker from './Clicker';
import SWMovies from './SWMovies';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <CounterClass />
        <CounterHooks />
        <Toggler />
        <SimpleFormClass />
        <SimpleFormHooks />
        <SimpleForminputHook /> */}
        {/* <Clicker /> */}
        <SWMovies />
      </div>
    )
  }
}

export default App;
