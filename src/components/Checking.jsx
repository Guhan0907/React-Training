// import React, { Component } from "react";
// import moment from "moment";

// class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputText: "",
//       inputTime: "",
//       todos: [],
//     };
//   }

//   componentDidMount() {
//     // Check every 30 seconds for due tasks
//     this.checkInterval = setInterval(this.checkForDueTasks, 30000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.checkInterval);
//   }

//   handleChangeText = (e) => {
//     this.setState({ inputText: e.target.value });
//   };

//   handleChangeTime = (e) => {
//     this.setState({ inputTime: e.target.value });
//   };

//   handleAdd = () => {
//     const { inputText, inputTime, todos } = this.state;
//     if (inputText.trim() === "" || inputTime.trim() === "") return;

//     const newTodo = {
//       text: inputText,
//       dueTime: inputTime,
//       completed: false,
//       alerted: false,
//     };

//     this.setState({
//       todos: [...todos, newTodo],
//       inputText: "",
//       inputTime: "",
//     });
//   };

//   toggleComplete = (index) => {
//     const updatedTodos = [...this.state.todos];
//     updatedTodos[index].completed = !updatedTodos[index].completed;
//     this.setState({ todos: updatedTodos });
//   };

//   handleDelete = (index) => {
//     const updatedTodos = [...this.state.todos];
//     updatedTodos.splice(index, 1);
//     this.setState({ todos: updatedTodos });
//   };

//   snoozeTask = (index) => {
//     const updatedTodos = [...this.state.todos];
//     const newTime = moment(updatedTodos[index].dueTime)
//       .add(10, "minutes")
//       .format("YYYY-MM-DDTHH:mm"); // match input[type="datetime-local"] format
//     updatedTodos[index].dueTime = newTime;
//     updatedTodos[index].alerted = false; // reset alert
//     this.setState({ todos: updatedTodos });
//     alert(`Snoozed "${updatedTodos[index].text}" for 10 more minutes`);
//   };

//   checkForDueTasks = () => {
//     const updatedTodos = this.state.todos.map((todo, index) => {
//       const now = moment();
//       const taskTime = moment(todo.dueTime);

//       if (!todo.completed && !todo.alerted && now.isSameOrAfter(taskTime)) {
//         alert(`⏰ Task Due: "${todo.text}"`);
//         return { ...todo, alerted: true };
//       }

//       return todo;
//     });

//     this.setState({ todos: updatedTodos });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Todo List with Time Alert</h2>

//         <input
//           type="text"
//           value={this.state.inputText}
//           onChange={this.handleChangeText}
//           placeholder="Enter a task"
//         />
//         <input
//           type="datetime-local"
//           value={this.state.inputTime}
//           onChange={this.handleChangeTime}
//         />
//         <button onClick={this.handleAdd}>Add</button>

//         <ul>
//           {this.state.todos.map((todo, index) => (
//             <li
//               key={index}
//               style={{ textDecoration: todo.completed ? "line-through" : "none" }}
//             >
//               {todo.text} — {moment(todo.dueTime).format("MMM Do, h:mm A")}

//               <button onClick={() => this.toggleComplete(index)}>
//                 {todo.completed ? "Undo" : "Complete"}
//               </button>

//               <button onClick={() => this.handleDelete(index)}>Delete</button>

//               {todo.alerted && !todo.completed && (
//                 <button onClick={() => this.snoozeTask(index)}>Snooze 10 min</button>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default TodoList;








// 8888888888888888888888888888888888

// import React, { Component } from "react";
// import moment from "moment";

// class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputTime: "", // for time input (datetime-local)
//       inputText: "", // for task text input
//       todo: [], // list of todos with countdown timers
//     };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(this.updateTimeLeft, 1000); // update every second
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   handleChangeText = (e) => {
//     this.setState({ inputText: e.target.value });
//   };

//   handleChangeTime = (e) => {
//     this.setState({ inputTime: e.target.value });
//   };

//   handAdd = () => {
//     const { inputTime, inputText, todo } = this.state;
//     if (inputTime.trim() === "" || inputText.trim() === "") return;

//     const newTodo = {
//       text: inputText,
//       time: inputTime, // store due datetime string
//       completed: false,
//       timeLeft: "", // will be updated in the timer
//     };

//     this.setState({
//       todo: [...todo, newTodo],
//       inputText: "",
//       inputTime: "",
//     });
//   };

//   toggleComplete = (index) => {
//     const updatedTodo = [...this.state.todo];
//     updatedTodo[index].completed = !updatedTodo[index].completed;
//     this.setState({ todo: updatedTodo });
//   };

//   handleDelete = (index) => {
//     const updatedTodo = [...this.state.todo];
//     updatedTodo.splice(index, 1);
//     this.setState({ todo: updatedTodo });
//   };

//     updateTimeLeft = () => {
//     const updatedTodos = this.state.todo.map((todo) => {
//       if (todo.completed) return todo; // don't update completed todos

//       const now = moment();
//       const due = moment(todo.time);
//       const duration = moment.duration(due.diff(now));

//       let timeLeft;

//       if (duration.asMilliseconds() <= 0) {
//         timeLeft = "00:00:00"; // time's up
//       } else {
//         timeLeft = this.formatDuration(duration);
//       }

//       return {
//         ...todo,
//         timeLeft,
//       };
//     });

//     this.setState({ todo: updatedTodos });
//   };


//   formatDuration = (duration) => {
//     const hours = String(Math.floor(duration.asHours())).padStart(2, "0");
//     const minutes = String(duration.minutes()).padStart(2, "0");
//     const seconds = String(duration.seconds()).padStart(2, "0");
//     return `${hours}:${minutes}:${seconds}`;
//   };

//   render() {
//     return (
//       <>
//         <div className="mainFolder">
//           <input
//             type="text"
//             placeholder="Enter the Task Title"
//             value={this.state.inputText}
//             onChange={this.handleChangeText}
//           />

//           <input
//             type="datetime-local"
//             value={this.state.inputTime}
//             onChange={this.handleChangeTime}
//           />

//           <button onClick={this.handAdd}>Add</button>
//         </div>

//         <div>
//           <ul>
//             {this.state.todo.map((item, index) => (
//               <li
//                 key={index}
//                 style={{
//                   textDecoration: item.completed ? "line-through" : "none",
//                 }}
//               >
//                 {item.text} — Due:{" "}
//                 {moment(item.time).format("MMM Do, h:mm A")} — Time Left:{" "}
//                 {item.timeLeft || "Calculating..."}
//                 <button onClick={() => this.toggleComplete(index)}>
//                   {item.completed ? "Undo" : "Completed"}
//                 </button>
//                 <button onClick={() => this.handleDelete(index)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </>
//     );
//   }
// }

// export default TodoList;


