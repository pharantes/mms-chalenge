import React, { Component } from "react";
import api from "../../api";

export default class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }
  deleteEmployee(employeeId) {
    api.deleteEmployee(employeeId)
    .then(data => {
      this.setState({
        employees: this.state.employees.filter(e => e._id !== employeeId),
        message: data.message
      })
      setTimeout(() => {
        this.setState({
          message: null
        })
      }, 2000)
    });
  }
  componentDidMount() {
    api
      .getEmployees()
      .then(employees => {
        this.setState({
          employees: employees
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Employees">
        <h2>List of employees</h2>
        <ul>
          {this.state.employees.map(e => (
            <li key={e._id}>
              {e.first_name} {e.second_name} 
              <button onClick={() => this.deleteEmployee(e._id)}>Delete</button>
              <button onClick={() => this.editEmployee(e._id)}>Edit</button>
              <button onClick={() => this.detailEmployee(e._id)}>Detail</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
