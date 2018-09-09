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
    this.setState({height}, this.setBmi);
  }

  weightChangeHandler = (weight) => {
    this.setState({weight}, this.setBmi);
  }

  setBmi = () => {
    let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2);
    this.setState({bmi, bmiClass: this.getBmiClass(bmi)}, function(){
      console.log(this.state)
    });
  }

  getBmiClass = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi <= 24.9) return 'Normal';
    if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
    if (bmi >= 30) return 'Obese';
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
        <Output data={this.state}/>
      </div>
    );
  }
}

export default App;
