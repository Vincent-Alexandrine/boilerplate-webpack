// NOTE: router v4 is all over the app, rename this file bootstrap ?

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from 'Src/store';
import Index from 'Screens/Index';
import theme from 'Styles/themes';

export default () => (
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <Route path="/" exact component={Index} />
      </ThemeProvider>
    </Router>
  </Provider>
);
