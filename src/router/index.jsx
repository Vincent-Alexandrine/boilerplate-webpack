import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Index from 'Screens/Index';

import theme from 'Styles/themes';

export default () => (
  <Router>
    <ThemeProvider theme={theme} >
      <Route path="/" exact component={Index} />
    </ThemeProvider>
  </Router>
);
