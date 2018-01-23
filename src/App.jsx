import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import createStore from './redux';
import chuck from './img/chuck-norris.png';
import styles from './App.css';

const store = createStore();

const App = () => (
    <Provider store={store} key="provider">
      <AppContainer>
        <div className={styles.App}>
          <img src={chuck} className={styles.chuckImg} alt="" />
        </div>
      </AppContainer>
    </Provider>
);
export default App;
