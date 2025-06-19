import React, { PureComponent } from "react";
import Timer from "./components/Trial";
import ControlledInput from "./components/ControlledInput";
import UncontrolledInput from "./components/UnControlledInput";

class MyComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showTimer: true,
    };
  }

  toggleTimer = () => this.setState({showTimer : !this.state.showTimer})

  render() {
    return (
      <div>
        <button onClick={this.toggleTimer}>
          {this.state.showTimer ? "Hide" : "Show"} Content
        </button>

        {this.state.showTimer && (
          <div
            key={"uni"}
            style={{ height: "300px", width: "100%", background: "pink" }}
          >
            <Timer />
            {/* <ControlledInput /> */}
            {/* <UncontrolledInput /> */}
          </div>
        )}
      </div>
    );
  }
}

export default MyComponent;
