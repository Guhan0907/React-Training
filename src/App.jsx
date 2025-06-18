import React, { Component } from "react";
import Timer from "./components/Trial";
import ControlledInput from "./components/ControlledInput";
import UncontrolledInput from "./components/UnControlledInput";

class MyComponent extends Component {
  // componentDidMount() {
  //   console.log("Component mounted");
  // }

  // componentWillUnmount() {
  //   console.log("Component will unmount");
  // }

  render() {
    return (
      <div key={"uni"}>
        {" "}
        <Timer />
        {/* <ControlledInput /> */}
        {/* <UncontrolledInput /> */}
      </div>
    );
  }
}

export default MyComponent;
