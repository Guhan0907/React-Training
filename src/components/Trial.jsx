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




import React , {Component} from 'react';

class Timer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            timer : 0,
            previousSpeed : props.speed
        };
        console.log("Constructor Completed");
    }

    static getDerivedStateFromProps (props , state) {
        if (props.speed != state.previousSpeed) {
            console.log("Changes done by the derivedStateFromProps");

            return {previousSpeed : props.speed};
        }
        return null;
    }

    componentDidMount () {
        console.log("Timer Started")

        this.intervalId = setInterval(() => {
            this.setState({
                timer: this.state.timer + 1
            });

            if (this.state.timer >= 10){
                clearInterval(this.intervalId);
            }
        })

        this.timerOutId = setTimeout(() => {
            clearInterval(this.intervalId);
            console.log("Timer Stopped Successfully")
        },1000)
    }

    // componentWillUnmount () {
    //     // clearInterval(intervalId);
    //     clearInterval(timerOutId)

    //     console.log("Cleared Due to Timeout")
    // }

    render() {
        return (
            <>
                <h2> Timings : {this.state.timer}</h2>
            </>
        )
    }
}

export default Timer;

