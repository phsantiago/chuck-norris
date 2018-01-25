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

  constructor(props) {
    super(props);
    this.state = {
      screen: 0,
    };
  }

  back() {
    this.setState({ screen: 0 });
  }

  render() {
    return (
      <div className={styles.base}>
        { this.state.screen === 0 &&
          <ul className={styles.listHolder}>
            {
              this.props.list.map((cat, i) => (
                <li
                  className={styles.listItem}
                  onClick={() => {
                    this.setState({ screen: 1 });
                    this.props.onChoose(cat);
                  }}
                  key={i}>
                  { cat }
                </li>
              ))
            }
          </ul>
        }
        { this.state.screen === 1 &&
          <Fragment>
            <Fact />
            <h6
              onClick={() => this.back()}
              className={styles.back}
            >
              Choose new one
            </h6>
          </Fragment>
        }
      </div>
    );
  }
}

export default Categories;
