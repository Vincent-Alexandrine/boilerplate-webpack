import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Styled from './Index.styled.js';

const Welcome = () => (
  <div>Welcome</div>
);

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
