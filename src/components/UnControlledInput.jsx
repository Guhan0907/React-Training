import React, { Component } from 'react';

class UncontrolledInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); 
  }

  handleSubmit = () => {
    // alert('Uncontrolled Input Value: ' + this.inputRef.current.value);
    console.log(this.inputRef.current.value)
  };

  render() {
    return (
      <div>
        <h3>Uncontrolled Component</h3>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default UncontrolledInput;
