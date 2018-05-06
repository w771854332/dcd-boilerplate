import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  routerRedux
} from 'dva/router'
import PropTypes from 'prop-types'
import dynamic from 'dva/dynamic'
import { AppRegistry } from '../common'
import Cover from '../../layouts/HomeCover'

require('./style.less')

const { ConnectedRouter } = routerRedux

const routes = [
  {
    path: '/home',
    models: () => [import(/* webpackChunkName: "chunk-home" */ '../../models/home')],
    component: () => import(/* webpackChunkName: "chunk-home" */ '../../pages/Home')
  },
  {
    path: '/lottery',
    component: () => import(/* webpackChunkName: "chunk-lottery" */ '../../pages/Lottery')
  },
  {
    path: '/awards',
    models: () => [import(/* webpackChunkName: "chunk-award" */ '../../models/awards')],
    component: () => import(/* webpackChunkName: "chunk-awards" */ '../../pages/Awards')
  }
]
function Main ({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <Cover>
        <Switch>
          {
            routes.map(({ path, ...dynamics }) => (
              <Route
                exact
                key={path}
                path={path}
                component={dynamic({
                  app,
                  ...dynamics
                })}
              />
            ))
          }
          <Redirect to="/home" />
        </Switch>
      </Cover>
    </ConnectedRouter>
  )
}

Main.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
}

AppRegistry({
  initialState: {
  },
  gModels: [require('../../models/card')],
  main: Main
}, __filename)
