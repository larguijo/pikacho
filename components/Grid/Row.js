import styled, { css } from 'styled-components';
import Column from './Column';
import toPixels from 'style/toPixels';

const Row = styled.div`
  position: relative;

  && {
    display: flex;
  }

  flex-wrap: ${props => (props.flexWrap ? props.flexWrap : 'wrap')};
  ${props => (props.direction ? `flex-direction: ${props.direction}` : '')};
  ${props => (props.alignItems ? `align-items: ${props.alignItems}` : '')};
  ${props =>
    props.justifyContent ? `justify-content: ${props.justifyContent}` : ''};
  ${props =>
    props.alignContent ? `align-content: ${props.alignContent}` : ''};

  ${props => {
    const { gutter } = props;

    if (gutter)
      return css`
        &&& {
          margin-right: -${toPixels(gutter)};
          margin-left: -${toPixels(gutter)};
          & > ${Column} {
            padding-right: ${toPixels(gutter)};
            padding-left: ${toPixels(gutter)};
          }
        }
      `;
  }}
`;

export default Row;
