/* eslint-disable import/no-named-as-default */

import React, { Component } from 'react';
import {  Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../common/Looader';
import AuthForm from './authForm';
import backgroundImage from '../../Assets/images/bg.jpg';
import { loginUser } from '../../actions/auth';

class Login extends Component {
    state = {
      isLoading: false,
    }

    handleSubmit = async (e) => {
      e.preventDefault();

      const data = {
        email: e.target.email.value,
        password: e.target.password.value,
      };

      this.setState({isLoading: true});
      await this.props.loginUser(data);
      this.setState({
        isLoading: false,
      });
    }

    render() {
      const { isLoading } = this.state;

      if(this.props.user){
        return <Redirect to='/'/>;
      }

      return(
        <div >
          {
            isLoading
              ? <Loader />
              :(
                <div className="login">
                  <img src={backgroundImage}/>
                  <AuthForm
                    formType="login"
                    handleSubmit={this.handleSubmit}/>
                </div> )
          }
        </div>);
    }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user:PropTypes.object
};

const mapStateToProps = state => ({
  user: state.authReducer.user,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
