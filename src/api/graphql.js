import { graphql } from '@octokit/graphql';

const mytoken = process.env.REACT_APP_GRAPHQL_TOKEN;

const getData = async () => {
  const { repository } = await graphql(
    `
      {
        repository(owner: "codestates-seb", name: "agora-states-fe") {
          discussions(first: 10) {
            edges {
              node {
                id
                title
                createdAt
                url
                author {
                  username: login
                  avatarUrl
                }
              }
            }
          }
        }
      }
    `,
    {
      headers: {
        authorization: `token ${mytoken}`,
      },
    }
  );

  return { repository };
};

export default getData;
