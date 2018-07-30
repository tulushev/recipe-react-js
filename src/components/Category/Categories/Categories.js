import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getCategories } from '../../../actions';
import './Categories.css';

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { tree } = this.props;

    return (
      <div className="wrapper">
        <ul className="sidebar">
          {tree.map(category => {
            return (
              <div key={category._id}>
                <Link to={`/category/${category._id}`}>
                  <li className="categoryItem">{category.name}</li>
                </Link>
                {category.children.map(item => {
                  return (
                    <Link key={item._id} to={`/category/${item._id}`}>
                      <li className="categoryItem categoryItemChildren">{item.name}</li>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Categories.propTypes = {
  getCategories: PropTypes.func,
  categories: PropTypes.array
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCategories }, dispatch);
}

const mapStateToProps = state => ({
  tree: state.category.tree
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
