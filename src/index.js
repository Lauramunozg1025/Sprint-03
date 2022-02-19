import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './routers/AppRouter';
import { DashboardRouter } from './routers/DashboardRouter'
import { Provider } from 'react-redux';
import { store } from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
