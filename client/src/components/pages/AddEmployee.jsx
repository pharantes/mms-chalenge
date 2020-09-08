import React, { Component } from 'react';
import api from '../../api';


class AddEmployee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: "",
      second_name: "",
      role: "",
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
    console.log(this.state.first_name, this.state.second_name)
    let data = {
      first_name: this.state.first_name,
      second_name: this.state.second_name,
      role: this.state.role
    }
  
    api.postEmployees(  data)
      .then(data => {
  
        this.setState({
          first_name: "",
          second_name: "",
          role: "",
          message: `Your employee '${this.state.first_name}' has been created`
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
      <div className="AddEmployee">
        <h2>Add employee</h2>
        <form method="post" name="fileinfo">
          Name: <input type="text" value={this.state.first_name} onChange={(e) => { this.handleInputChange("first_name", e) }} /> <br />
          Second Name: <input type="text" value={this.state.second_name} onChange={(e) => { this.handleInputChange("second_name", e) }} /> <br />
          Role: <input type="text" value={this.state.role} onChange={(e) => { this.handleInputChange("role", e) }} /> <br />
          <button type="submit" onClick={(e) => this.handleClick(e)}>Create employee</button>
        </form>
        {this.state.message && <div className="info">
          {this.state.message}
        </div>}
      </div>
    );
  }
}

export default AddEmployee;
