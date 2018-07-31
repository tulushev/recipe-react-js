import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Content from '../Content/Content';
import './CategoryNested.css';
import { getNestedCategories, getArticleRecipe } from '../../../actions';
import SideBar from '../../SideBar/SideBar';

class CategoryNested extends Component {
  componentDidMount() {
    const { getNestedCategories, getArticleRecipe, match } = this.props;
    getNestedCategories(match.params.id);
    getArticleRecipe(match.params.id);
  }

  getSnapshotBeforeUpdate(prevProps) {
    const { match, getArticleRecipe } = this.props;
    if (match && match.params && match.params.id) {
      if (prevProps.match.params.id !== match.params.id) {
        getArticleRecipe(match.params.id);
      }
    }
    return match;
  }

  componentDidUpdate() {}

  render() {
    const { match } = this.props;

    return (
      <div className="wrapper">
        <SideBar />
        <div>
          <Breadcrumb bread={match} />
          <Content />
        </div>
      </div>
    );
  }
}

CategoryNested.propTypes = {
  getNestedCategories: PropTypes.func,
  getArticleRecipe: PropTypes.func,
  categoriesNested: PropTypes.array,
  articleRecipeList: PropTypes.array,
  match: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getNestedCategories, getArticleRecipe },
    dispatch,
  );
}

const mapStateToProps = (state) => ({
  categories: state.category.categories,
  categoriesNested: state.category.categoriesNested,
  articleRecipeList: state.category.articleRecipeList,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryNested);
