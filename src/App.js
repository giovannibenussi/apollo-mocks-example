import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Rates from './Rates'
import gql from 'graphql-tag'
import faker from 'faker'

const typeDefs = gql`
  extend type ExchangeRate {
    name: String!
  }
`

const resolvers = {
  ExchangeRate: {
    name: () => faker.finance.currencyName()
  }
}

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  typeDefs,
  resolvers
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div style={{ padding: '0rem 2rem' }}>
        <h1>Apollo Mocks Demo 🚀</h1>
        <h2>
          Everything inside <i>ApolloProvider</i> can make queries using our new configuration!
        </h2>
        <Rates />
      </div>
    </ApolloProvider>
  )
}

export default App
