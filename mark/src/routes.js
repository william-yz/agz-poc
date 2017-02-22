import React from 'react' // 引入react
import { Route, IndexRoute } from 'react-router' // 引入react路由
import { App, Editor } from './containers' // 引入各容器组件

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Editor}/>
  </Route>
)
