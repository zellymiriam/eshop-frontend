/* eslint-disable import/no-named-as-default */
import React from 'react';

const Loader = () => {
  return (
    <React.Fragment>
      <div className="loader">
        <div className="spinner-icon"><i className="fas fa-spinner"></i></div>
        <div className="text">Loading please wait...</div>
      </div>
    </React.Fragment>
  );
};

export default Loader;
