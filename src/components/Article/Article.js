import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {Recipe} from '../Recipe/Recipe';

import { getArticle } from '../../actions';
import SideBar from '../SideBar/SideBar';

class Article extends Recipe {
  constructor(props) {
    super(props);

    this.getContent = props.getArticle;
    this.article = props.article;
  }

  render() {
    return (
      <div className='wrapper'>
        <SideBar />
        <div>
          <p>Title: {this.article.name}</p>
          <p>Description: {this.article.description}</p>
        </div>
      </div>
    )
  }
}

Article.propTypes = {
  match: PropTypes.object,
  getArticle: PropTypes.func,
  article: PropTypes.object,
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getArticle }, dispatch,)
}

const mapStateToProps = (state) => ({
  article: state.article.article,
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);