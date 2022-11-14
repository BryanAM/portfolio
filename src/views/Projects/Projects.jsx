import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v1 } from 'uuid';
import { Stack, Card } from '../../components/index';
import REPO_QUERY from '../../assets/data/githubQuery';
import './projects.scss';

function Projects() {
  const [t] = useTranslation();
  const [repos, setRepos] = useState();

  const baseUrl = 'https://api.github.com/graphql';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  };

  useEffect(() => {
    const fetchResponse = async () => {
      fetch(baseUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(REPO_QUERY),
      })
        .then((res) => res.json())
        .then((res) => {
          const gitHubData = res.data.user.repositories.edges;
          console.log(gitHubData);
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
          </Card>
        ))}
      </Stack>
    </div>
  );
}

export default Projects;
