import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Welcome from '../Welcome.component.jsx';
import Styled from '../Welcome.styled.js';

beforeAll('Component: Welcome', () => {
  test('Welcome component should match snapshot', () => {
    const component = renderer
      .create(<Welcome />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Welcome styled component should match snapshot', () => {
    const component = renderer
      .create(<Styled />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
