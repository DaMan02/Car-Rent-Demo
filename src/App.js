import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route
} from "react-router-dom";
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard'
import Details from './pages/Details/Details'
import Booking from './pages/Booking/Booking'

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
               <Route path="/form"
              exact
              component={props => <Booking {...props} />}
              />
          {/* </Switch> */}
      </Router>
    );
  }
  }

export default App;
