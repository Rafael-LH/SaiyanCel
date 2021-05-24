// Libs
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import Layout from '@components/Layout'
import Home from '@pages/Home'
// import ProductDescription from '@pages/ProductDescription'
// import ProductList from '@pages/ProductList'
// import NotFound from '@pages/NotFound'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/type/:type" component={ProductList} />
          <Route exact path="/product/description/:id" component={ProductDescription} />
          <Route component={NotFound} /> */}
        </Switch>
      </Layout>
    </Router>
  )
}
export default App