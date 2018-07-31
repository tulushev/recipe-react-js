import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getArticle } from '../../actions';
import SideBar from '../SideBar/SideBar';

class Article extends Component {
  componentDidMount() {
    const { match, getArticle } = this.props;
    getArticle(match.params.id);
  }

  render() {
    const { article } = this.props;

    return (
      <div className='wrapper'>
        <SideBar />
        <div>
          <p>Title: {article.name}</p>
          <p>Description: {article.description}</p>
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