import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeight, faMale, faBalanceScale, faSmile, faSadCry } from '@fortawesome/free-solid-svg-icons'

class Output extends Component {
  toFeet = (n) => {
    const realFeet = ((n * 0.393700) / 12);
    const feet = Math.floor(realFeet);
    const inches = Math.round((realFeet - feet) * 12);
    return feet + "'" + inches;
  }

  toLbs = (n) => {
    const nearExact = n / 0.45359237;
    const lbs = Math.floor(nearExact);
    return lbs;
  }
  render() {
    const height = this.toFeet(this.props.data.height);
    const weight = this.toLbs(this.props.data.weight);
    const bmi = this.props.data.bmi;
    const bmiClass = this.props.data.bmiClass;
    return (
      <div className="output">
        <div class="block">
          <p><FontAwesomeIcon icon={faMale} /></p><h3>{height}</h3>  
        </div>
        <div class="block">
          <p><FontAwesomeIcon icon={faWeight} /></p><h3>{weight} lbs</h3>
        </div>
        <div class="block">
          <p><FontAwesomeIcon icon={faBalanceScale} /></p><h3> {bmi}</h3>
        </div>
        <div class="block">
          <h3 className={(this.props.data.bmiClass === "Normal") ? "success" : "danger"}>
          {bmiClass} {(this.props.data.bmiClass === "Normal") ? "" : <a href='https://www.cigna.com/takecontrol/tc/bmi/' target="_blank">What can I do?</a>}  <FontAwesomeIcon icon={(this.props.data.bmiClass === "Normal") ? faSmile : faSadCry} />
          </h3>
        </div>
      </div>
    );
  }
}

export default Output;
