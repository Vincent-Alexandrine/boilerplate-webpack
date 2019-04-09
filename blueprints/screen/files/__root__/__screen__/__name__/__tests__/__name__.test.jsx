import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import <%= pascalEntityName %> from '../<%= pascalEntityName %>.component.jsx';
import Styled from '../<%= pascalEntityName %>.styled.js';

test('<%= pascalEntityName %> component should match snapshot', () => {
  const component = renderer
    .create(<<%= pascalEntityName %> />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('<%= pascalEntityName %> styled component should match snapshot', () => {
  const component = renderer
    .create(<Styled />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
