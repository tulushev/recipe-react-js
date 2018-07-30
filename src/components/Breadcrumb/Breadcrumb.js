import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { getCategories } from '../../actions';
import './Breadcrumb.css';

class Breadcrumb extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div>
        <ul className="breadcrumb">
        {this.props.categories.map(category => {
          return (
            <li className="breadcrumbItem" key={category._id}>
              <Link to={`/category/${category._id}`}>{category.name}</Link>
            </li>
          );
        })}
      </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCategories }, dispatch);
}

const mapStateToProps = state => ({
  categories: state.category.categories,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Breadcrumb);
