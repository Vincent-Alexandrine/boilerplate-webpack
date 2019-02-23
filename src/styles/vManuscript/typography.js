import { css } from 'styled-components';

import RubikRegular from 'Assets/fonts/Rubik/Rubik-Regular.ttf';
import RubikMedium from 'Assets/fonts/Rubik/Rubik-Medium.ttf';
import OxygenRegular from 'Assets/fonts/Oxygen/Oxygen-Regular.ttf';
import OxygenBold from 'Assets/fonts/Oxygen/Oxygen-Bold.ttf';

const title = 'title';
const subtitle = 'subtitle';
const content = 'content';
const condensed = 'condensed';

export default css`
  @font-face {
    font-family: ${title};
    src: url(${OxygenBold}) format('truetype');
  }
  @font-face {
    font-family: ${subtitle};
    src: url(${OxygenRegular}) format('truetype');
  }
  @font-face {
    font-family: ${content};
    src: url(${RubikRegular}) format('truetype');
  }
  @font-face {
    font-family: ${condensed};
    src: url(${RubikMedium}) format('truetype');
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }
  h1, h2, h3 {
    font-family: ${title};
  }

  h4, h5, h6 {
    font-family: ${subtitle};
  }

  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 3.1rem;
  }

  h3 {
    font-size: 2.7rem;
  }

  h4 {
    font-size: 2.3rem;
  }

  h5 {
    font-size: 2rem;
  }

  h6 {
    font-size: 1.8rem;
  }

  span, p, div {
    font-family: ${content};
    font-size: 1.6rem;
  }


  i {
    font-family: ${condensed};
    font-size: 1.6rem;
    font-style: normal;
  }

  a {
    color: ${props => props.theme.primary.active};
    font-family: ${condensed};
    font-size: 1.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;
