/* eslint-disable import/no-named-as-default */

import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import shoes from '../../Assets/images/shoes.jpg';
import dresses from '../../Assets/images/dresses.jpg';
import watch from '../../Assets/images/watch.jpg';

const SlideShow = () => {

  return (
    <React.Fragment>
      <div className="slide-show">
        <span id="image-1"></span>
        <span id="image-2"></span>
        <span id="image-3"></span>
        <div className="image-container">
          <div id="img1" className="slide-show_image">
            <img src={shoes} />
            <img src={shoes}/>
            <img src={shoes} />
            <img src={shoes} />
          </div>
          <div id="img2" className="slide-show_image">
            <img src={dresses} />
            <img src={dresses} />
            <img src={dresses} />
            <img src={dresses} />

          </div>
          <div id="img3" className="slide-show_image">
            <img src={watch} />
            <img src={watch} />
            <img src={watch} />
            <img src={watch} />
          </div>
        </div>
        <div className="button-container">
          <a href="#image-1" className="slider-button"></a>
          <a href="#image-2" className="slider-button"></a>
          <a href="#image-3" className="slider-button"></a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SlideShow;
