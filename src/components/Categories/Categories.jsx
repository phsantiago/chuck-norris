import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Categories.css';

class Categories extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
    onChoose: PropTypes.func,
    fetchCategories: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className={styles.base}>
        <ul className={styles.listHolder}>
          {
            this.props.list.map((cat, i) => (
              <li
                className={styles.listItem}
                onClick={() => this.props.onChoose(cat) }
                key={i}>
                { cat }
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Categories;
