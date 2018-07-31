import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Breadcrumb.css';
import { getArticleRecipe, getNestedCategories } from '../../actions';

class Breadcrumb extends Component {
  renderNested = (categories) =>
    categories.map((category) => {
      return (
        <div key={category._id} className="breadcrumb">
          <Link to={`/category/${category._id}`}>{category.name}</Link>
        </div>
      );
    });

  getSnapshotBeforeUpdate(prevProps) {
    const { bread, getArticleRecipe, getNestedCategories } = this.props;

    if (bread && bread.params && bread.params.id) {
      if (prevProps.bread.params.id !== bread.params.id) {
        getArticleRecipe(bread.params.id);
        getNestedCategories(bread.params.id);
      }
    }
    return this.props.bread;
  }

  componentDidUpdate() {}

  render() {
    const { categoriesNested } = this.props;

    return (
      <div className="breadcrumb">{this.renderNested(categoriesNested)}</div>
    );
  }
}

Breadcrumb.propTypes = {
  bread: PropTypes.object,
  getArticleRecipe: PropTypes.func,
  getNestedCategories: PropTypes.func,
  categoriesNested: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getArticleRecipe, getNestedCategories },
    dispatch,
  );
}

const mapStateToProps = (state) => ({
  categoriesNested: state.category.categoriesNested,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Breadcrumb);
