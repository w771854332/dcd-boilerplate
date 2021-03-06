/**
 * mock 的示例，mockjs的使用参见 http://mockjs.com/examples.html
 */
const proxy = {
  'GET /motor/pleasure/worldcup/awards/list': (req, res) => {
    delete require.cache[require.resolve('./awards_mock')]
    res.send(require('./awards_mock')())
  },

  /**
   * example
   */
  // 'POST /api/login/account': (req, res) => {
  //   const { password, username } = req.body;
  //   if (password === '888888' && username === 'admin') {
  //     return res.json({
  //       status: 'ok',
  //       code: 0,
  //       token: "sdfsdfsdfdsf",
  //       data: {
  //         id: 1,
  //         username: 'kenny',
  //         sex: 6
  //       }
  //     });
  //   } else {
  //     return res.json({
  //       status: 'error',
  //       code: 403
  //     });
  //   }
  // },
  // 'DELETE /api/user/:id': (req, res) => {
  //   console.log('---->', req.body)
  //   console.log('---->', req.params.id)
  //   res.send({ status: 'ok', message: '删除成功！' });
  // }
}
module.exports = proxy;
