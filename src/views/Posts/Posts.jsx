import React from 'react';
import { useTranslation } from 'react-i18next';
import postData from '../../assets/data/posts';
import Post from '../../components/Post/Post';
import { Stack } from '../../components';
import './posts.scss';

function Posts() {
  const [t] = useTranslation();
  return (
    <div className="max-content-width posts">
      <Stack flexDirection="column">
        <h1 className="posts-header">{t('posts.header')}</h1>
        {postData.map((post) => (
          <Post
            key={post.id}
            description={post.description}
            header={post.header}
            url={post.url}
          />
        ))}
      </Stack>
    </div>
  );
}

export default Posts;
