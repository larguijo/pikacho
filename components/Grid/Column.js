import styled from 'styled-components';
import * as grid from 'style/grid';

const getFlexVal = (val, display = 'block') => {
  if (val === 'hidden') return 'display: none';
  if (val === true) return `display: ${display}; flex: 1 0 0px`;
  if (String(val).includes(' ')) return `display: ${display}; flex: ${val}`;

  const numeric = Number(val);
  const isFraction = numeric && numeric < 1;

  if (isFraction) {
    const proc = 100 * val + '%';
    return `display: ${display}; flex: 0 0 ${proc}; max-width: ${proc}`;
  }
  if (numeric) return `display: ${display}; flex: ${val} 0 0px`;
  return `display: ${display}; flex: 0 0 ${val}; max-width: ${val}`;
};

const columnStyle = (props, size) => {
  const val = props[size];
  const flexVal = (val || Number(val) === 0) && getFlexVal(val, props.display);

  const orderVal =
    (typeof props.order === 'object' && props.order[size]) ||
    (size === 'xs' && props.order);

  if (flexVal || orderVal)
    return `@media ${grid[size]} {
      ${flexVal ? flexVal : ''};
      ${orderVal ? `order: ${orderVal}` : ''};
    }`;
};

const Column = styled.div`
  flex: 1 0 0px;
  ${props => columnStyle(props, 'xs')}
  ${props => columnStyle(props, 'sm')}
  ${props => columnStyle(props, 'md')}
  ${props => columnStyle(props, 'lg')}
  ${props => columnStyle(props, 'xl')}

  ${props => (props.alignSelf ? `align-self: ${props.alignSelf}` : '')};
  ${props => (props.justifySelf ? `justify-self: ${props.justifySelf}` : '')};  
`;

export default Column;
