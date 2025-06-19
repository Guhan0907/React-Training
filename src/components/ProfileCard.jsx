import React, { Component } from 'react';

class ProfileCard extends Component {
  render() {
    const { name, age } = this.props;

    return (
      <div style={{ border: '1px solid gray', padding: '10px', width: '200px' }}>
        <h3>Profile Info</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
      </div>
    );
  }
}

export default ProfileCard;
