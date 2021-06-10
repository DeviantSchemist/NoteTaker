const {join} = require('path')

module.exports = app => {
  app.get('/notes', (req, res) => {
    res.sendFile(join(__dirname, 'public/notes.html'))
  })

  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'public/index.html'))
  })
}