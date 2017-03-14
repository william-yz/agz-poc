import React from 'react'
import { Router } from 'dva/router'

// const cached = {}
// function registerModel (app, model) {
//   if (!cached[model.namespace]) {
//     app.model(model)
//     cached[model.namespace] = 1
//   }
// }

function RouterConfig ({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'IndexPage',
      getComponent (nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/IndexPage').default)
        })
      }
    }
  ]

  return (
      <Router history={history} routes={routes} >
      </Router>
    )
}

export default RouterConfig
