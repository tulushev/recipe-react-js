import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './SideBar.css';
import { getCategories } from '../../actions';

class SideBar extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  renderTree = (list) => {
    const res = [];

    for (let item of list) {
      {
        this.renderEl(item);
      }
      let nextLvl = item.children;
      res.push(
        <div className="categoryItem" key={item._id}>
          {this.renderEl(item)}
        </div>,
      );
      res.push(
        <div
          key={item.children._id}
          className="categoryItemChildren categoryItem"
        >
          {this.renderTree(nextLvl)}
        </div>,
      );
    }

    return res;
  };

  renderEl = (item) => {
    return <Link to={`/category/${item._id}`}>{item.name}</Link>;
  };

  render() {
    return (
      <div className="sidebar">
        <div>{this.renderTree(this.props.tree)}</div>
      </div>
    );
  }
}

SideBar.propTypes = {
  getCategories: PropTypes.func,
  categories: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCategories }, dispatch);
}

const mapStateToProps = (state) => ({
  tree: state.category.tree,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar);
