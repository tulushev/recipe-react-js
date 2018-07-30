import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './Category.css';
import SideBar from '../SideBar/SideBar';
import { getArticleRecipe } from '../../actions';

class Category extends Component {
  componentDidMount() {
    const { getArticleRecipe, match } = this.props;
    console.log('match', match)
    // getArticleRecipe(match.params._id);
  }

  render() {
    const { articleRecipeList } = this.props;

    return (
      <div className="wrapper">
        <SideBar articleRecipeList={articleRecipeList} />
      </div>
    );
  }
}

Category.propTypes = {
  getArticleRecipe: PropTypes.func,
  articleRecipeList: PropTypes.array,
  match: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getArticleRecipe }, dispatch);
}

const mapStateToProps = (state) => ({
  articleRecipeList: state.category.articleRecipeList,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Category);
