import { createStore as _createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './modules';

export default function createStore() {
  const middleware = [thunk];
  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
    middleware.push(logger);
  }
  const finalCreateStore = applyMiddleware(...middleware)(_createStore);
  const store = finalCreateStore(
    reducer,
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  if (module.hot) {
    module.hot.accept('./modules', () => {
      store.replaceReducer(require('./modules')); //eslint-disable-line
    });
  }

  return store;
}
