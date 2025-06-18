// import React, { Component, PureComponent } from "react";
// import Timer from "./components/Trial";
// import ControlledInput from "./components/ControlledInput";
// import UncontrolledInput from "./components/UnControlledInput";

// class MyComponent extends PureComponent {
//   // componentDidMount() {
//   //   console.log("Component mounted");
//   // }

//   // componentWillUnmount() {
//   //   console.log("Component will unmount");
//   // }

//   constructor(props) {
//     super(props);
//     this.state = {
//       showTimer: true,
//     };
//   }

//   render() {
//     return (
//       <div
//         key={"uni"}
//         style={{ height: "300px", width: "100%", background: "pink" }}
//       >
//         {" "}
//         {this.state.showTimer && <Timer />}
//         {/* <ControlledInput /> */}
//         {/* <UncontrolledInput /> */}
//       </div>
//     );
//   }
// }

// export default MyComponent;


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

  toggleTimer = () => {
    this.setState((prev) => ({
      showTimer : !prev.showTimer,
    }))
  }

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
