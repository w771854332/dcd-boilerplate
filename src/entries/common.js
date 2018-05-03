import dva from 'dva'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import '../utils/normalize'
/**
 * @param {Element} params.main
 * @param {Array} params.gModels
 * @param {string} hotPath
 */
export function AppRegistry (params, hotPath) {
  function init () {
    const { gModels: models, main, ...args } = params
    const app = dva(args)
    const router = main.default || main
    models.forEach(m => {
      app.model(m.default || m)
    })
    app.router(router)

    return app.start()
  }
  const MOUNT_NODE = document.getElementById('root')

  function render () {
    const App = init()
    ReactDOM.render(
      <AppContainer>
        <App/>
      </AppContainer>
      , MOUNT_NODE
    )
  }
  render()
  if (module.hot) {
    console.log(module)
    module.hot.accept(hotPath, () => {
      render()
    })
  }
}