import React, { Component } from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import createStore from './redux';
import chuck from './img/chuck-norris.png';
import styles from './App.css';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store} key="provider">
        <AppContainer>
          <div className={styles.App}>
            <img src={chuck} className="chuckImg" alt="" />
          </div>
        </AppContainer>
      </Provider>
    );
  }
}

export default App;
