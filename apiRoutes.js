let notes = require('./db/db.json')  // reads the db.json file
const { uid } = require('uid')  // unique id number generator
const fs = require('fs')  // used for writing files

// exports all of the below functions using the express app variable
module.exports = app => {
  // gets the saved notes
  app.get('/api/notes', (req, res) => {
    res.json(notes)
  })

  // gives a note a unique id and puts it into the db.json file
  app.post('/api/notes', (req, res) => {
    req.body.id = uid()
    notes.push(req.body)
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(req.body)
  })

  // deletes a note with the specified id
  app.delete('/api/notes/:id', (req, res) => {
    notes = notes.filter(note => note.id !== req.params.id)
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes)
  })
}