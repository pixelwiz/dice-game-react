import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// TODO: cleanup
const composeMiddleWare = () => (window.devToolsExtension ?
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension(),
  ) :
  compose(applyMiddleware(thunk))
);

export default (initialState) => {
  const store = createStore(rootReducer, initialState, composeMiddleWare());

  window.store = store;

  return store;
};
