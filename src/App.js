import React, { Component } from 'react';
import './App.css';
import Range from './Components/Range';
import Output from './Components/Output';

class App extends Component {
  state = {
    height: 170,
    weight: 65,
    bmi: 22.49,
    bmiClass: 'Nomal'
  }
  render() {
    return (
      <div className="App">
        <h1>BMI Claculator</h1>
        <form>
          <div>
            <label>Height</label>
            <Range />
            <label>Weight</label>
          </div>
        </form>
        <br /><br />
        <Output />
      </div>
    );
  }
}

export default App;
