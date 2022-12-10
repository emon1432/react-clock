import React from "react";
import Result from "./Result";

export default class WaterBoil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: 0,
      fahrenheit: 0,
    };
  }

  temperatureValue = (event) => {
    //only numbers
    if (
      event.target.name === "celsius" &&
      event.target.value.match(/^[0-9\b]+$/)
    ) {
      this.setState({
        celsius: event.target.value,
        fahrenheit: (event.target.value * 9) / 5 + 32,
      });
    } else if (
      event.target.name === "fahrenheit" &&
      event.target.value.match(/^[0-9\b]+$/)
    ) {
      this.setState({
        celsius: ((event.target.value - 32) * 5) / 9,
        fahrenheit: event.target.value,
      });
    } else if (event.target.value === "") {
      this.setState({
        celsius: event.target.value,
        fahrenheit: event.target.value,
      });
    }
  };
  render() {
    return (
      <div>
        <h1>Inter Temperature Converter</h1>
        <fieldset>
          <legend>Enter temperature in Celsius: </legend>
          <input
            type="text"
            name="celsius"
            value={this.state.celsius}
            onChange={this.temperatureValue}
          />
        </fieldset>

        <fieldset>
          <legend>Enter temperature in Fahrenheit: </legend>
          <input
            type="text"
            name="fahrenheit"
            value={this.state.fahrenheit}
            onChange={this.temperatureValue}
          />
          <br />
          <br />
        </fieldset>

        <Result
          celsius={this.state.celsius}
          fahrenheit={this.state.fahrenheit}
        />
      </div>
    );
  }
}
