const {join} = require('path')

module.exports = app => {
  app.get('/notes', (req, res) => {
    res.sendFile(join(__dirname, '../../../notes.html'))
  })

  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../../../index.html'))
  })
}