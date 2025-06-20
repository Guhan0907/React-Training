import React, { Component } from "react";
import moment from "moment";import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
// import VolumeDown from '@mui/icons-material/VolumeDown';
// import VolumeUp from '@mui/icons-material/VolumeUp';
// mui
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: 5,
      inputTime: "", // for time
      inputText: "", // for the text
      todo: [], // for storing the list of values

    };
  }

  handAdd = () => {
    const { inputTime, inputText, todo } = this.state;

    if (inputTime.trim() === "" || inputText.trim() === "") return;

    const newTodo = {
      text: inputText,
      time: inputTime,
      completed: false,
      timeLeft :""
    };

    this.setState({
      todo: [...todo, newTodo]
    });
  };

  componentDidMount() {
      this.timerId = setInterval(this.updateTimeLeft , 1000);
  };

  componentWillUnmount () {
    clearInterval(this.timerId);
  }

  toggleComplete = (index) => {
    const updatedTodo = this.state.todo;
    updatedTodo[index].completed = !updatedTodo[index].completed;
    this.setState({ todo: updatedTodo });
  };

  handleDelete = (index) => {
    const deletedTodo = [...this.state.todo];
    deletedTodo.splice(index, 1);
    this.setState({ todo: deletedTodo });
    console.log("Deleting");
  };

  updateTimeLeft = () => {
    const updateTodo = this.state.todo.map((item) => {
      if (item.completed)
          return item;
      const now = moment();
      const due = moment(item.time)
      const duration = moment.duration(due.diff(now));

      let timeDiff;

      if (duration.asMilliseconds() <= 0) {
        timeDiff = "00:00:00";
      }
      else {
        timeDiff = this.formatTiming(due.diff(now));
      }
      item.timeLeft = timeDiff 
      return item;
    });
    this.setState({todo : updateTodo});
  };

  formatTiming = (timing) => {
    // console.log("hello")
    return moment.utc(timing).format("HH:mm:ss")
  }

  render() {
    return (
      <>
        <div className="mainFolder">
           <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        {/* <VolumeDown /> */}
        <Slider aria-label="Volume" value={this.state.slider} onChange={(value) => {
          console.log(value, '-----------');
          
          this.setState({
          ...this.state.slider,
          slider: value.target.value,
        })}} />
        {/* <VolumeUp /> */}
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
          <input
            type="text"
            placeholder="Enter the Task Title"
            name="textArea"
            // value={this.state.inputText}
            onChange={(e) => this.setState({ inputText: e.target.value })}
          />

          <input
            type="datetime-local"
            placeholder="Enter the timing"
            name="timeArea"
            value={this.state.inputTime}
            onChange={(e) => this.setState({ inputTime: e.target.value })}
          />
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
            {/* <DemoContainer components={["DateTimePicker"]}> */}
              {/* <DateTimePicker label="Basic date time picker" /> */}
            {/* </DemoContainer> */}
          {/* </LocalizationProvider> */}

          <button onClick={this.handAdd}> Add </button>
        </div>

        <div>
          <ul>
            {/* {moment().minute()} */}
            {this.state.todo.map((item, index) => (
              <li
                key={index}
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.text} --- {item.time} --- {item.timeLeft}
                <button onClick={() => this.toggleComplete(index)}>
                  {" "}
                  {item.completed ? "Undo" : "Completed"}
                </button>
                <button onClick={() => this.handleDelete(this.index)}>
                  {" "}
                  Delete{" "}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default TodoList;

