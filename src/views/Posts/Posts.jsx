import React from 'react';
import postData from '../../assets/posts/posts';
import Post from '../../components/Post/Post';
import './posts.scss';

function Posts() {
  return (
    <div>
      {postData.map((post) => (
        <Post
          description={post.description}
          header={post.header}
          url={post.url}
        />
      ))}
    </div>
  );
}

export default Posts;
