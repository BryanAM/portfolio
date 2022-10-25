import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;