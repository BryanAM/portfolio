import React from 'react';
import PropTypes from 'prop-types';
import Stack from '../Stack/Stack';
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
        <a className="font-size-300" href={data.url} target="_blank" rel="noreferrer" aria-label="sajeon link">{data.title}</a>
        <p>{data.description}</p>
        <Stack flexWrap="wrap">
          {data.tags.map((tag) => (
            <p className="card-content-tag font-size-100">{tag}</p>
          ))}
        </Stack>
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
