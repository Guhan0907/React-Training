// import React , {Component} from "react";

// class Timer extends React.Component {
//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Tick...');
//     }, 1);

//     this.timeoutId = setTimeout(() => {
//       clearInterval(this.intervalId);
//       console.log('Stopped after 10 seconds');
//     }, 10000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//     console.log('Timer stopped and cleaned up');
//   }

//   render() {
//     return <h1>Timer is running...</h1>;
//   }
// }

// export default Timer;





import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      previousSpeed: props.speed,
      lap : [],
    };
    console.log("Constructor Completed");
  }

  static getDerivedStateFromProps(props, state) {
    if (props.speed != state.previousSpeed) {
      console.log("Changes done by the derivedStateFromProps");

      return { previousSpeed: props.speed };
    }
    return null;
  }

  componentDidMount() {
    console.log("Timer Started");

    this.intervalId = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
      });

      // if (this.state.timer >= 10){
      //     clearInterval(this.intervalId);
      // }
    });
    console.log(this.intervalId, "this is it");
    this.timerOutId = setTimeout(() => {
      clearInterval(this.intervalId);
      console.log("Timer Stopped Successfully", this.intervalId);
    }, 100000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    clearInterval(this.timerOutId);
    console.log("Cleared due to Unmount");
  }

  handleLap = () => {
    let arr = [...this.state.lap]
    arr.push(this.state.timer)
    this.setState({lap : arr})

    console.log("Lap Button =>> ", this.state.timer)
  }

  render() {
    if (this.state.timer === 200) {
      console.log("200");
    }

    return (
      <>
        <h2> Timings : {this.state.timer}</h2>
        <button onClick={this.handleLap}> Lap </button>

        <div>
          <h3> Laps </h3>
          <ul>
            {this.state.lap.map((x , ind) => {
              return <li key={ind} > Lap {ind + 1} : {x} </li>
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default Timer;
