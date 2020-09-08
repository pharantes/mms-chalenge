import React, { Component } from 'react'
import api from "../../api";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  deleteProject(projectId) {
    api.deleteProject(projectId)
    .then(data => {
      this.setState({
        projects: this.state.projects.filter(p => p._id !== projectId),
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
      .getProjects()
      .then(projects => {
        this.setState({
          projects: projects
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Projects">
        <h2>List of projects</h2>
        <ul>
          {this.state.projects.map(p => (
            <li key={p._id}>
              {p.name}
              <button onClick={() => this.deleteProject(p._id)}>Delete</button>
              <button onClick={() => this.editProject(p._id)}>Edit</button>
              <button onClick={() => this.detailProject(p._id)}>Detail</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
