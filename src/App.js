import React, { Component } from 'react';
import './App.css';

import NavBar from './components/navbar';
import HomePage from './components/home-page';
import Dashboard from './components/dashboard';
import LectureDashboard from './components/lecture-dashboard';
import ResidenceDashboard from './components/residence-dashboard'

import SidebarContainer from './containers/sidebar';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './semantic/dist/semantic.min.css';

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
            <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/lectures/:id" component={LectureDashboard} />
            <Route exact path="/residences/:id" component={ResidenceDashboard} />
            </div>
          </div>
        </Router>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
