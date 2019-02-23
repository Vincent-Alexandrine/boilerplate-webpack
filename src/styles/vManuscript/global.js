import { css } from 'styled-components';
import typography from './typography';

export default css`
  html {
    font-size: 62.5%;
    min-height: 100vh;
    display: flex;
  }

  body {
    font-size: 1.7rem;
    flex: 1 0 100%;
    color: ${props => props.theme.primary.text};
    background-color: ${props => props.theme.primary.background};
  }

  ::selection {
    color:  ${props => props.theme.secondary.contrastedText};
    background-color: ${props => props.theme.secondary.light};
  }

  #app-root, #app-root > * {
    height: 100%;
  }
  ${typography}
`;
