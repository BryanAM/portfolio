const REPO_QUERY = {
  query: `
    query { 
      user(login: "BryanAM"){
        repositories(orderBy: {direction: DESC field: CREATED_AT} first: 6 privacy: PUBLIC){
          edges {
            node {
              url
              description
              name
              repositoryTopics(first: 6){
                edges{
                  node{
                    topic{
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`,
};

export default REPO_QUERY;
