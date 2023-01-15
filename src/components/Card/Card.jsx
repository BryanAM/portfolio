import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Blob } from '../../assets/pictograms/blob.svg';
import './card.scss';

function Card({ children, data }) {
  return (
    <div className="card">
      <div className="card-blob left">
        <Blob />
      </div>
      <div className="card-blob right">
        <Blob />
      </div>
      <div className="card-content-wrapper">
        <a href={data.url} target="_blank" rel="noreferrer" aria-label="sajeon link">{data.title}</a>
        <p>{data.description}</p>
        {children}
      </div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.node.isRequired,
};

export default Card;
