import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

const TOKEN =
  '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'
const cache = new InMemoryCache({})

const link = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${TOKEN}`,
  },
})

export const client = new ApolloClient({
  cache: cache,
  link: link,
})
