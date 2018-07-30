import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './CategoryNested.css';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Content from '../Content/Content';
import { getNestedCategories, getArticleRecipe } from '../../../actions';

class CategoryNested extends Component {
  componentDidMount() {
    const { getNestedCategories, getArticleRecipe, match } = this.props;
    getNestedCategories(match.params.id);
    console.log('asdasdasd', getArticleRecipe(match.params.id))
    getArticleRecipe(match.params.id);
  }

  getSnapshotBeforeUpdate(prevProps) {
    if (this.props.match && this.props.match.params && this.props.match.params.id) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.props.getArticleRecipe(this.props.match.params.id);
      }
    }
    return this.props.match;
  }

  componentDidUpdate() {
    console.log(this.props.match)
  }

  render() {
    const { categories, articleRecipeList } = this.props;

    console.log(articleRecipeList)

    return (
      <div className="wrapper">
        <Breadcrumb
          categories={categories}
        />
        <Content contentList={articleRecipeList} />
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
