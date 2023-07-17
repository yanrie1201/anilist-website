// @ts-ignore
import React from 'react'
// @ts-ignore
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// @ts-ignore
import { Provider } from 'react-redux'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // @ts-ignore
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co/',
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
)
