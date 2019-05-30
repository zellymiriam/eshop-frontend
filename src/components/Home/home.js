/* eslint-disable import/no-named-as-default */

import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SlideShow from '../common/SlideShow';
import { getAllItems } from '../../actions/item';
import Card from '../common/Card';
import Loader from '../common/Looader';

class Home extends Component {
  state = {
    isLoading:true
  }

  async componentDidMount(){
    await this.props.getAllItems();
    this.setState({ isLoading:false });
  }

  render() {
    const { items }= this.props;

    return (
      <React.Fragment>
        { this.state.isLoading ? <Loader/>
          :
          (<div>
            <SlideShow/>
            <div className="home">
              {(items&&items.length>0)&&<Card items={items}/>}
            </div>
          </div>
          )
        }
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  getAllItems: PropTypes.func.isRequired,
  items:PropTypes.array
};

const mapStateToProps = state => ({
  items: state.itemReducer.items,
});

const mapDispatchToProps = {
  getAllItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
