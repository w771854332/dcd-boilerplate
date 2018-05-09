
import dva from 'dva'
import createLoading from 'dva-loading'
import createMemoryHistory from 'history/createMemoryHistory'
import '../common'
const app = dva({
  onError () {

  },
  history: createMemoryHistory(),
  ...createLoading({
    effects: true
  })
})
app.model(require('../../models/invite'))
app.model(require('../../models/notice'))

app.router(require('./main'))

app.start('#root')
