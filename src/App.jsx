import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Header from './components/Header/Header.jsx';
import Categories from './containers/Categories/Categories';
import createStore from './redux';
import chuck from './img/chuck-norris.png';
import styles from './App.css';

const store = createStore();

const App = () => (
    <Provider store={store} key="provider">
      <AppContainer>
        <div>
          <div className={styles.App}>
            <Header />
            <Categories onChoose={a => alert(a)} list={['explicit', 'dev', 'movie', 'food', 'celebrity', 'science', 'sport', 'political', 'religion', 'animal', 'history', 'music', 'travel', 'career', 'money', 'fashion']}/>
            <img src={chuck} className={styles.chuckImg} alt="" />
          </div>
        </div>
      </AppContainer>
    </Provider>
);
export default App;
