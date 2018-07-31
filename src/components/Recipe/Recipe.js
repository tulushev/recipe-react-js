import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getRecipe } from '../../actions';
import SideBar from '../SideBar/SideBar';

export class Recipe extends Component {
  constructor(props) {
    super(props);

    this.getRecipe = props.getRecipe;
    this.recipe = props.recipe;
  }

  componentDidMount() {
    const { match } = this.props;

    this.getRecipe(match.params.id);
  }

  render() {
    return (
      <div className='wrapper'>
        <SideBar />
        <div>
          <p>Title: {this.recipe.name}</p>
          <p>Description: {this.recipe.description}</p>
        </div>
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
  return bindActionCreators({ getRecipe }, dispatch,)
}

const mapStateToProps = (state) => ({
  recipe: state.recipe.recipe,
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);