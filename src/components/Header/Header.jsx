import React from 'react';
import styles from './Header.css';
import ic from '../../img/norris-ic.png';

function Header() {
  return (
    <div className={styles.base}>
      <img src={ic} className={styles.ic} alt="ícone representando chuck norris"/>
      <h1 className={styles.txtBg}>Chuck Norris</h1>
      <h1 className={styles.txtBg}>Fact Generator</h1>
    </div>
  );
}


export default Header;
