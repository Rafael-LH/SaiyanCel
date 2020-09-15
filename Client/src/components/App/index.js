// Libs
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import GlobalStyles from '@styles/globalStyles'
import Layout from '@components/Layout'
import Home from '@pages/Home'
import NotFound from '@pages/NotFound'

const App = () => {
  return (
    <Router>
      <Layout>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}
export default App