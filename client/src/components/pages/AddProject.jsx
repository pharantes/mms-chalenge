import React, { Component } from 'react';
import api from '../../api';


class AddProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      start_date: "",
      time_slack: "",
      supervisor: "",
      message: ""
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {
    }
    
    newState[stateFieldName] = event.target.value  
    console.log(newState) 
    this.setState(newState)

  }

  handleClick(e) {
    e.preventDefault()
    console.log(this.state.name, this.state.supervisor)
    let data = {
      name: this.state.name,
      start_date: this.state.start_date,
      time_slack: this.state.time_slack,
      supervisor: this.state.supervisor,
    }
  
    api.postProjects(data)
      .then(data => {
  
        this.setState({
          name: "",
          start_date: "",
          time_slack: "",
          supervisor: "",
          message: `Your project '${this.state.name}' has been created`
        })
        setTimeout(() => {
          this.setState({
            message: null
          })
        }, 2000)
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="AddProject">
        <h2>Add project</h2>
        <form method="post" name="fileinfo">
          Name: <input type="text" value={this.state.name} onChange={(e) => { this.handleInputChange("name", e) }} /> <br />
          Supervisor: <input type="text" value={this.state.supervisor} onChange={(e) => { this.handleInputChange("supervisor", e) }} /> <br />
          Start Date: <input type="date" value={this.state.start_date} onChange={(e) => { this.handleInputChange("start_date", e) }} /> <br />
          Time Slack: <input type="text" value={this.state.time_slack} onChange={(e) => { this.handleInputChange("time_slack", e) }} /> <br />
          <button type="submit" onClick={(e) => this.handleClick(e)}>Create project</button>
        </form>
        {this.state.message && <div className="info">
          {this.state.message}
        </div>}
      </div>
    );
  }
}

export default AddProject;
