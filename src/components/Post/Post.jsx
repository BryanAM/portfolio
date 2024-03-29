import React from 'react';
import PropTypes from 'prop-types';
import './post.scss';

function Post({ url, header, description }) {
  return (

    <a className="post" href={url} target="_blank" rel="noopener noreferrer">
      <h3 className="post-header">{header}</h3>
      <p className="post-description">{description}</p>
    </a>
  );
}

Post.propTypes = {
  description: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Post;
