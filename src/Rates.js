import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      rate
      name @client
    }
  }
`

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.rates.map(({ name, rate }) => (
    <ul key={name}>
      <li>
        <strong>{name}</strong>: {rate}
      </li>
    </ul>
  ))
}
export default ExchangeRates
