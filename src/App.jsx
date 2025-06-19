import React, { PureComponent } from "react";
import Timer from "./components/Trial";
import ControlledInput from "./components/ControlledInput";
import UncontrolledInput from "./components/UnControlledInput";
import ProfileCard from "./components/ProfileCard";
import FunctionalComponents from "./components/FunctionalComponents";

class MyComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showTimer: true,
    };
  }

  toggleTimer = () => this.setState({showTimer : !this.state.showTimer})

  render() {

    const userName = "Guhan";
    const Age = 20

    return (
      <div>
        <button onClick={this.toggleTimer} style={{marginBottom : "10px"}}>
          {this.state.showTimer ? "Hide" : "Show"} Content
        </button>

        {this.state.showTimer && (
          <div
            key={"uni"}
            style={{ height: "300px", width: "100%", background: "pink" }}
          >
            {/* <Timer /> */}
            {/* <ControlledInput /> */}
            {/* <UncontrolledInput /> */}
            {/* <ProfileCard name={userName} age={Age}  /> */}
            <FunctionalComponents />
          </div>
        )}
      </div>
    );
  }
}

export default MyComponent;


// import React, { PureComponent } from "react";
// import Timer from "./components/Trial";
// import ControlledInput from "./components/ControlledInput";
// import UncontrolledInput from "./components/UnControlledInput";
// import ProfileCard from "./components/ProfileCard";
// import FunctionalComponents from "./components/FunctionalComponents";

// class MyComponent extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showTimer: true,
//     };
//   }

//   toggleTimer = () => this.setState({showTimer : !this.state.showTimer})

//   render() {

//     const userName = "Guhan";
//     const Age = 20

//     return (
//       <div>
//         {/* <Timer /> */}
//             {/* <ControlledInput /> */}
//             {/* <UncontrolledInput /> */}
//             {/* <ProfileCard name={userName} age={Age}  /> */}
//             <FunctionalComponents />
//       </div>
//     );
//   }
// }

// export default MyComponent;
