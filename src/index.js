import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './state/store/configureStore';

window.store = configureStore({
  game: {
    mainImageIndex: 0,
    pageNum: 1,
    perPage: 4, // Per supplied requirements
    direction: 'forward',
  },
});

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={window.store}>
    <App />
  </Provider>,
  rootEl,
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default; // eslint-disable-line global-require
    ReactDOM.render(
      <NextApp />,
      rootEl,
    );
  });
}
registerServiceWorker();

