import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from './common/NavBar';
import Home from './Home/home';
import Signup from './Auth/signup';
import Login from './Auth/login';

export const NotFound = () => (
  <h1>Page Not Found</h1>
);

class App extends Component {

  render() {
    const { pathname } = this.props.location;
    const urls = ['/login', '/signup'];
    const displayNavBar = urls.includes(pathname) ? null : <NavBar />;

    return (

      <Router>
        {displayNavBar}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
App.propTypes = {
  location: PropTypes.object
};

export default withRouter(App);
