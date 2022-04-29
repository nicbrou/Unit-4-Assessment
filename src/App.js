import React, { Component } from "react";
import "./App.css";
import CircleSelector from "./CircleSelector";
import Circles from "./Circles";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      button: 1,
      message: "Circle 1 (Selected)",
    };
  }

  handleSelect = (incomingButton) => {
    this.setState({
      button: incomingButton,
      message: `Circle ${incomingButton} (Selected)`,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            handleSelect={this.handleSelect}
            message={this.state.message}
            button={this.state.button}
          ></CircleSelector>
          <Circles button={this.state.button}></Circles>
        </main>
      </div>
    );
  }
}
