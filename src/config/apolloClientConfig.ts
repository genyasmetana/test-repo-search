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
