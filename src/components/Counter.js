import React, { Component } from "react";

export default class Counter extends Component {

  state = {
    counter: 0
  }



  render() {
    return (
      <div>
        <h1>Counter Component</h1>
        <h4>{this.state.counter}</h4>
      </div>
    );
  }
}
