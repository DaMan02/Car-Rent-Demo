import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route
} from "react-router-dom";
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard'
import Details from './pages/Details/Details'

class App extends React.Component {
  render() {
    return (
      <Router>
          {/* <Switch> */}
            <Route path="/"
              exact
              component={props => <Dashboard {...props} />}
              />
              <Route path="/details"
              exact
              component={props => <Details {...props} />}
              />
          {/* </Switch> */}
      </Router>
    );
  }
  }

export default App;
