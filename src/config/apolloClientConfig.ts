import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

// TODO REPLACE THIS TOKEN VALUE TO HAVE AN ABILITY TO CALL GIT API
const PERSONAL_ACCESS_TOKEN = ''

const cache = new InMemoryCache({})

const link = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${PERSONAL_ACCESS_TOKEN}`,
  },
})

export const client = new ApolloClient({
  cache: cache,
  link: link,
})
