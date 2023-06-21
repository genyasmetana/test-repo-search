import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql(`
  query SearchRepositories($query: String!, $after: String) {
    search(first: 10, query: $query, type: REPOSITORY, after: $after) {
      nodes {
        ... on Repository {
          id
          url
          name
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
        }
      }
    }
  }
`)
