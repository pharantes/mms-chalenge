import React, { Component } from 'react';
import AddEmployee from './AddEmployee'
import AddProject from './AddProject'

class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {                
    return (
      <div className="Home">
        <h2>Home</h2>
        <p>This is a sample project with the MERN stack</p>
        <h1>Projects and Employees Manager</h1>
        <AddEmployee/>
        <AddProject/>
      </div>
      
    );
  }
}

export default Home;
