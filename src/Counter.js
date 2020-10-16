import React, { Component } from "react";
import { ThemeContext } from "./App.js";

export default class Counter extends Component {
  //in order to get state we want to over ride our class constructor
  constructor(props) {
    super();
    this.state = {
      count: props.initialCount,
    };
  }

  render() {
    console.log("Render Counter");
    //every react component has access to this.props
    return (
  /*Theme Context: This is the consumer to the provider in App.js
  */
      <ThemeContext.Consumer>
        {(style) => (
          <div>
            <button style={style} onClick={() => this.changeCount(-1)}>-</button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCount(1)}>+</button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }

  changeCount(num) {
    // when using prevState, you have to use the function with return version
    this.setState((prevState) => {
      return { count: prevState.count + num };
    });
  }
}
