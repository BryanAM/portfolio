import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack } from '../../components/index';
import REPO_QUERY from '../../assets/data/githubQuery';
import './projects.scss';

function Projects() {
  const [t] = useTranslation();

  const baseUrl = 'https://api.github.com/graphql';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'bearer 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',
  };

  useEffect(() => {
    const fetchResponse = async () => {
      fetch(baseUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(REPO_QUERY),
      })
        .then((res) => res.json())
        .then((res) => console.log(res.data.user.repositories.edges));
    };

    fetchResponse();
  }, []);

  return (
    <div className="max-content-width projects">
      <Stack flexDirection="column">
        <h1 className="posts-header">{t('projects.header')}</h1>
      </Stack>
    </div>
  );
}

export default Projects;
