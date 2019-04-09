import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
//import { I18nextProvider } from 'react-i18next';

//import i18n from 'Src/i18n/i18n.config.mock.js';
import Welcome from '../Welcome.component.jsx';
import Styled from '../Welcome.styled.js';

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
