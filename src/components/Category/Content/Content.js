import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Content.css';

class Content extends Component {
  render() {
    const { articleRecipeList } = this.props;
    return (
      <div>
        {articleRecipeList.map((item) => {
          if (item && item.content) {
            if (item.type === 'recipe') {
              return (
                <div key={item.content._id}>
                  <Link
                    to={`/recipe/${item.content._id}`}
                    className="itemTitle"
                  >
                    Title: {item.content.name}
                  </Link>
                  <p className="itemDescr">
                    Descriprion: {item.content.description}
                  </p>
                </div>
              );
            }

            return (
              <div key={item.content._id}>
                <Link to={`/article/${item.content._id}`} className="itemTitle">
                  Title: {item.content.name}
                </Link>
                <p className="itemDescr">
                  Descriprion: {item.content.description}
                </p>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

Content.propTypes = {
  articleRecipeList: PropTypes.array,
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

const mapStateToProps = (state) => ({
  articleRecipeList: state.category.articleRecipeList,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content);
