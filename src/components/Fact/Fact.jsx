import React from 'react';
import PropTypes from 'prop-types';
import styles from './Fact.css';

function Fact({ ...props }) {
  return (
    <div className={styles.base}>
      {props.children}
    </div>
  );
}

Fact.defaultProps = {
  fetchFact: () => {},
};

Fact.propTypes = {
  children: PropTypes.node,
  fetchFact: PropTypes.func,
};

export default Fact;
