import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from 'Screens/Index';

export default () => (
  <Router>
    <div>
      <Route path="/" exact component={Index} />
    </div>
  </Router>
);
