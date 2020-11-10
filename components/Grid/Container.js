import styled, { css } from 'styled-components';
import * as grid from 'style/grid';
import Column from './Column';
import Row from './Row';
import toPixels from 'style/toPixels';
const { sm, md, lg, xl, gutterWidth } = grid;

const Container = styled.div.attrs(props => ({
  gutter: props.gutter !== undefined ? props.gutter : gutterWidth,
}))`
  position: relative;

  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${props =>
    !props.fluid &&
    ` @media ${sm} { max-width: ${sm.containerWidth}px; }
      @media ${md} { max-width: ${md.containerWidth}px; }
      @media ${lg} { max-width: ${lg.containerWidth}px; }
      @media ${xl} { max-width: ${xl.containerWidth}px; }
  `}

  ${props => {
    const { gutter } = props;

    if (gutter)
      return css`
        && {
          padding-right: ${toPixels(gutter)};
          padding-left: ${toPixels(gutter)};
        }
        ${Row} {
          margin-right: -${toPixels(gutter)};
          margin-left: -${toPixels(gutter)};
          & > ${Column} {
            padding-right: ${toPixels(gutter)};
            padding-left: ${toPixels(gutter)};
          }
        }
      `;
  }}
    
  /* Only the outermost container contains padding*/
  & && {
    padding-right: 0px;
    padding-left: 0px;
  }
`;

export default Container;
