import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getRecipe, fetchDeleteRecipe } from '../../actions';
import SideBar from '../SideBar/SideBar';

export class Recipe extends Component {
  constructor(props) {
    super(props);

    this.getContent = props.getRecipe;
    this.recipe = props.recipe;
    this.id = props.match.params.id;
  }

  componentDidMount() {
    this.getContent(this.id);
  }

  removeItem = () => {
    this.props.fetchDeleteRecipe(this.id);
    this.props.history.goBack('/category');
  }

  render() {
    return (
      <div className='wrapper'>
        <SideBar />
        <div>
          <p>Title: {this.recipe.name}</p>
          <p>Description: {this.recipe.description}</p>
        </div>
        <div className='btnGroup'>
          <button />
          <button onClick={this.removeItem} className='deleteBtn'>Delete</button>
        </div>
      </div>
    );
  }
}

Recipe.propTypes = {
  match: PropTypes.object,
  getRecipe: PropTypes.func,
  fetchDeleteRecipe: PropTypes.func,
  recipe: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getRecipe, fetchDeleteRecipe }, dispatch);
}

const mapStateToProps = state => ({
  recipe: state.recipe.recipe,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
