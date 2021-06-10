// reads the db.json file
let notes = require('./db/db.json')
const { uid } = require('uid')
const fs = require('fs')

module.exports = app => {
  app.get('/api/notes', (req, res) => {
    res.json(notes)
  })

  app.post('/api/notes', (req, res) => {
    req.body.id = uid()
    notes.push(req.body)
    fs.writeFileSync('./db/db.json', JSON.stringify(notes)) //might need to change this line to be the actual directory
    res.json(req.body)
  })

  app.delete('/api/notes/:id', (req, res) => {
    notes = notes.filter(note => note.id !== req.params.id)
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes)
  })
}