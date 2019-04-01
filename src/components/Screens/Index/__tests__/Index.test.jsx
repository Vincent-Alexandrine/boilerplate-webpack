import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Index from '../Index.component.jsx';
import Styled from '../Index.styled.js';

beforeAll('Component: Index', () => {
  test('Index component should match snapshot', () => {
    const component = renderer
      .create(<Index />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Index styled component should match snapshot', () => {
    const component = renderer
      .create(<Styled />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});