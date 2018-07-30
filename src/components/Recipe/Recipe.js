import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getRecipe, getArticle } from '../../actions';

class Recipe extends Component {
  componentDidMount() {
    const { match, getRecipe } = this.props;

    getRecipe(match.params.id);
  }

  render() {
    const { recipe } = this.props;

    return (
      <div>
        <p>Title: {recipe.name}</p>
        <p>Description: {recipe.description}</p>
      </div>
    )
  }
}

Recipe.propTypes = {
  match: PropTypes.object,
  getRecipe: PropTypes.func,
  recipe: PropTypes.object,
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getRecipe, getArticle }, dispatch,)
}

const mapStateToProps = (state) => ({
  recipe: state.recipe.recipe
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);