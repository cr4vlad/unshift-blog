import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from './routes'
import Layout from './Layout'

function App (props) {
  return (
    <Router>
      <Layout {...props}>
        <BaseRouter />
      </Layout>
    </Router>
  )
}

export default App
