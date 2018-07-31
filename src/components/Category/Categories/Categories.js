import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import SideBar from '../../SideBar/SideBar';
import './Categories.css';

class Categories extends Component {
  render() {
    return (
      <div className="wrapper">
        <SideBar />
        <h1>Categories</h1>
      </div>
    );
  }
}

Categories.propTypes = {
  getCategories: PropTypes.func,
  categories: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
