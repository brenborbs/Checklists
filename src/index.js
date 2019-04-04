import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { configureStore } from './store/configureStore';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import { loadCheckLists } from './actions/checkListActions';

import 'semantic-ui-css/semantic.min.css'

import './resources/css/index.css';
import App from './App';

const store = configureStore();
store.dispatch(loadCheckLists());

const rootEl = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <Provider store={store} >
    <BrowserRouter>
    <ReduxToastr 
      position="bottom-right"
      transitionIn='fadeIn'
      transitionOut='fadeOut' />
      <App />
    </BrowserRouter>
    </Provider>
    ,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./App', () =>{
    setTimeout(render);
  })
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
