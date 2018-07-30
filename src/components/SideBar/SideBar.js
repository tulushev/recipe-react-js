import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './SideBar.css';
import { getCategories } from '../../actions';

class SideBar extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    // if (this.props.categories) {
    //   return (
    //     <ul className="sidebar">
    //       {this.props.categories.map(category => {
    //         return (
    //           <div key={category._id}>
    //             <Link to={`/category/${category._id}`}>
    //               <li className="categoryItem">{category.name}</li>
    //             </Link>
    //             {category.children.map(item => {
    //               return (
    //                 <Link key={item._id} to={`/category/${item._id}`}>
    //                   <li className="categoryItem categoryItemChildren">{item.name}</li>
    //                 </Link>
    //               );
    //             })}
    //           </div>
    //         );
    //       })}
    //     </ul>
    //   );
    // }

    return (
      <div>
        <Link to="/category">Go to categories</Link>
      </div>
    );
  }
}

SideBar.propTypes = {
  getCategories: PropTypes.func,
  categories: PropTypes.array
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCategories }, dispatch);
}

const mapStateToProps = state => ({
  categories: state.category.categories
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
