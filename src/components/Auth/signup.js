/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../common/Looader';
import AuthForm from './authForm';
import backgroundImage from '../../Assets/images/bg.jpg';
import { registerUser } from '../../actions/auth';

class Signup extends Component {
  state = {
    isLoading: false,
    redirect:false
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };

    this.setState({isLoading: true});
    await this.props.registerUser(data);
    this.setState({
      isLoading: false,
      redirect:true
    });
  }

  render() {
    const { isLoading} = this.state;

    if(this.props.message==='The registration was successful'){
      return <Redirect to='/login'/>;
    }

    return(
      <div >
        {
          isLoading
            ? <Loader />
            :(
              <div className="signup">
                <img src={backgroundImage}/>
                <AuthForm
                  formType="signup"
                  handleSubmit={this.handleSubmit}
                  error={this.props.error}
                />
              </div> )
        }
      </div>);
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  message:PropTypes.string,
  error:PropTypes.string,
};

const mapStateToProps = state => ({
  message: state.authReducer.message,
  error: state.authReducer.error,
});

const mapDispatchToProps = {
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
