/* eslint-disable import/no-named-as-default */

import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavBar extends Component {
  state ={
    redirect:false
  }

  handleRedirect= async()=>{
    await this.setState({redirect:true});

    if (this.state.redirect){
      return <Redirect to='/signup'/>;
    }

  }

  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <div className="logo">Eshop</div>
          <ul>
            <div className="nav-center">
              <li  >
                <Link to="/test">
              Menu
                  <span className="nav-center_icon" ><i className="fas fa-angle-down"></i></span>
                </Link>
              </li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </div>
            <div className="search-nav">
              <input  placeholder="search..." />
            </div>
            <div className="nav-right">
              <li onClick={()=>this.handleRedirect}><a >Sign Up</a></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </div>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
