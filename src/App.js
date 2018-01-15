import React, { Component } from 'react';
import './App.css';

import NavBar from './components/navBar';
import HomePage from './components/homePage';
import Dashboard from './components/dashboard';
import LectureDashboard from './components/lectureDashboard';

import SidebarContainer from './containers/sidebar';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Router>
          <div className="container">
            <div className="navbar">
            <NavBar />
            </div>
            <div>
              <SidebarContainer />
            </div>
            <div className="content">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/lectures/:id" component={LectureDashboard} />
            </div>
          </div>
        </Router>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
