import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Projects from './pages/Projects';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: []
    }
  }
  componentDidMount() {
    
    this.setState()
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IPlytics Front-End Challenge</h1>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/employees">Employees</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/employees" component={Employees} />
          <Route exact path="/projects" component={Projects} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}

export default App;
