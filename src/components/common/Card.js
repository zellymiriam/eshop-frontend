/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = props => {
  const { items } = props;

  return (<React.Fragment>
    {items.map((item, i) => {
      return(
        <div className="card" key={i}>
          <div className="image" ><img src={item.imageUrl}></img></div>
          <div className="title"> {item.title} </div>
          <div className="price"> UGX { item.price}</div>
          <div className="actions" >
            <span className="edit-icon"><i className="far fa-edit"></i></span>
            <span className="delete-icon"><i className="far fa-trash-alt"></i></span>
          </div>
        </div>);
    })}
  </React.Fragment>);
};

Card.propTypes = {
  items: PropTypes.array.isRequired
};

export default Card;
