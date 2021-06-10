const express = require('express')
const { join } = require('path')
const { uid } = require('uid')
const app = express()
const fs = require('fs')

let notes = require('../../../db/db.json')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/notes', (req, res) => {
  res.sendFile(join(__dirname, 'notes.html'))
})

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'))
})

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.post('/api/notes', (req, res) => {
  req.body.id = uid()
  fs.writeFileSync('db.json', req.body)
  res.send(req.body)
})

app.delete('/api/notes/:id', (req, res) => {
  notes = notes.filter(note => note.id !== req.params.id)
  fs.writeFileSync('db.json', notes)
})