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

  heightChangeHandler = (height) => {
    this.setState({height}, function(){
      console.log(this.state);
    })
  }

  weightChangeHandler = (weight) => {
    this.setState({weight}, function(){
      console.log(this.state);
    })
  }

  render() {
    return (
      <div className="App">
        <h1>BMI Claculator</h1>
        <form>
          <div>
            <label>Height</label>
            <Range 
              value={this.state.height}
              onChange={this.heightChangeHandler} />
            <label>Weight</label>
            <Range 
              value={this.state.weight}
              onChange={this.weightChangeHandler} />
          </div>
        </form>
        <br /><br />
        <Output />
      </div>
    );
  }
}

export default App;
