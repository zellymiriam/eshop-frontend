/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthForm = props =>  {
  const{ formType, handleSubmit, error} = props;
  let signupActive='auth-btns-active';
  let signinActive;
  let labelClass;
  let displayInput=null;

  if (formType==='login'){
    signinActive = 'auth-btns-active';
    signupActive=null;
    labelClass='form-label';
    displayInput='display';
  }

  return (
    <div className="auth-form">
      <div className="auth-btns">
        <Link to="/signup" ><button className={signupActive} >Sign Up</button></Link>
        <Link to="/login"> <button className={signinActive} >Sign In</button></Link>
      </div>
      <div className="error">{error}</div>
      <form  className="form" onSubmit={handleSubmit}>
        <label className={labelClass} htmlFor="fname" >First Name</label>
        <input className={displayInput} id="fname"placeholder="First Name..." name="firstName" />
        <label className={labelClass} htmlFor="lname" hidden>Last Name</label>
        <input className={displayInput} placeholder="Last Name..." name="lastName"/>
        <label htmlFor="email">Email</label>
        <input  type="email" placeholder="Email..." name="email"/>
        <label htmlFor="psw" >Password</label>
        <input  placeholder="Password..." type="password" name="password"/>
        <label className={labelClass} hhidden htmlFor="cpsw" >Confirm Password</label>
        <input  className={displayInput} placeholder="Confirm Password..."type="password" name="confirmPassword"/>
        <button type="submit"bclassName="submit">Submit</button>
      </form>
    </div>
  );
};

AuthForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error:PropTypes.string,
  formType:PropTypes.string,
};

export default AuthForm;
