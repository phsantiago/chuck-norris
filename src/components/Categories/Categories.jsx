import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Fact from '../../containers/Fact/Fact';
import styles from './Categories.css';

class Categories extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
    choosen: PropTypes.string,
    onChoose: PropTypes.func,
    fetchCategories: PropTypes.func,
  };

  static defaultProps = {
    list: [],
    choosen: '',
    fetchCategories: () => {},
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className={styles.base}>
        { this.props.choosen.length > 1 ||
          <ul className={styles.listHolder}>
            {
              this.props.list.map((cat, i) => (
                <li
                  className={styles.listItem}
                  onClick={() => this.props.onChoose(cat)}
                  key={i}>
                  { cat }
                </li>
              ))
            }
          </ul>
        }
        { this.props.choosen.length === 0 ||
          <Fragment>
            <h6
              onClick={() => this.props.onChoose('')}
              className={styles.back}
            >
              Choose new one
            </h6>
            <Fact />
          </Fragment>
        }
      </div>
    );
  }
}

export default Categories;
