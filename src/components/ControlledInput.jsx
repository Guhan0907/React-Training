import React, { Component } from 'react';

class ControlledInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      error: ''
    };
  }

handleChange = (event) => {
  const newValue = event.target.value;

  // Check if all characters are letters 
  
  if (newValue === '' || newValue.match(/^[a-zA-Z]+$/)) {
    this.setState({ inputValue: newValue, error: '' });
  } 
  
  else {
    this.setState({ error: 'Please enter only letters.' });
  }
};

  handleSubmit = () => {
    if (this.state.inputValue === '') {
      alert('Input is empty!');
    } 
    
    else if (this.state.error) {
      alert('Please fix errors before submitting.');
    } 
    
    else {
      // alert('Controlled Input Value: ' + this.state.inputValue);
      console.log(this.state.inputValue);
    }
  };

  render() {
    return (
      <div>
        <h3>Controlled Component</h3>
        <input
          type="text"
          value={this.state.inputValue}      
          onChange={this.handleChange}       
        />
        <button onClick={this.handleSubmit}>Submit</button>

        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}

      </div>
    );
  }
}

export default ControlledInput;
