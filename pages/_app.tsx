import App, { Container } from 'next/app'
import React from 'react'
import withApolloClient from '../src/lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'

class MyApp extends App<any> {
  render () {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
