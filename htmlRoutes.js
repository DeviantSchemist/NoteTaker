const {join} = require('path')  // used to joining directory names

// exports these functions using the express app variable
module.exports = app => {
  // sends the notes.html file for the /notes get request
  app.get('/notes', (req, res) => {
    res.sendFile(join(__dirname, 'public/notes.html'))
  })

  // goes to the home page, index.html, for the default request url
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'public/index.html'))
  })
}