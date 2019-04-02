import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Welcome from './Molecules/Welcome';

import Styled from './Index.styled.js';

class Index extends Component {
  static defaultProps = {

  };

  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string,
    }),
  };

  render() {
    return (
      <Styled>
        <main>
          <Switch>
            <Route path="/" component={Welcome} />
          </Switch>
        </main>
      </Styled>
    );
  }
}

export default Index;
