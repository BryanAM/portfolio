import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './stack.scss';

function Stack({
  children,
  className,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
}) {
  const stackRef = useRef(null);
  return (
    <div
      ref={stackRef}
      className={`stack
      ${`j-${justifyContent}`}
      ${`a-${alignItems}`}
      ${`c-${alignContent}`}
      ${flexDirection}
      ${flexWrap}
      ${className}`}
    >
      {children}
    </div>
  );
}

Stack.defaultProps = {
  alignContent: 'normal',
  alignItems: 'stretch',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  className: '',
};

Stack.propTypes = {
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  flexDirection: PropTypes.string,
  flexWrap: PropTypes.string,
  justifyContent: PropTypes.string,
};
export default Stack;
