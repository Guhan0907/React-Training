import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      previousSpeed: props.speed,
      lap : [],
      paused : false,
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

      if (!this.state.paused){
      this.setState({
        timer: this.state.timer + 1,
      });
    }
     
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

  // lap button 
  handleLap = () => {
    let arr = [...this.state.lap]
    arr.push(this.state.timer)
    this.setState({lap : arr})

    console.log("Lap Button =>> ", this.state.timer)
  }

  // pause button
  togglePause = () => {
    this.setState({paused: !this.state.paused})
    console.log("Timer has been paused");
  }

  render() {
    // if (this.state.timer === 200) {
    //   console.log("200");
    // }

    return (
      <>
        <h2> Timings : {this.state.timer}</h2>
        <button onClick={this.handleLap}> Lap </button>
        <button onClick={this.togglePause}> {this.state.paused ? "Resume" : "Pause"} </button>
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
