import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v1 } from 'uuid';
import { Stack, Card } from '../../components/index';
import './projects.scss';

function Projects() {
  const [t] = useTranslation();
  const [repos, setRepos] = useState();

  const fetchGithubDataUrl = 'http://localhost:3001/github-info';

  useEffect(() => {
    const fetchResponse = async () => {
      fetch(fetchGithubDataUrl, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((res) => {
          const gitHubData = res.data.user.repositories.edges;
          setRepos(gitHubData.map((item) => ({ data: item.node, key: v1() })));
        });
    };

    fetchResponse();
  }, []);

  return (
    <div className="max-content-width projects">
      <Stack flexDirection="column">
        <h1 className="posts-header">{t('projects.header')}</h1>
        {repos && repos.map((repo) => (
          <Card key={repo.key}>
            <h1>{repo.data.name}</h1>
            <p>{repo.data.description}</p>
            <a href={repo.data.url}>Github</a>
          </Card>
        ))}
      </Stack>
    </div>
  );
}

export default Projects;
