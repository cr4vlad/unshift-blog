import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Landing from './pages/Landing'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'

function BaseRouter () {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/posts/:postId' component={Post} />
      <Route exact path='/posts/:postId/update' component={UpdatePost} />
      <Route exact path='/create' component={CreatePost} />
      <Route>404 Page not found</Route>
    </Switch>
  )
}

export default BaseRouter
