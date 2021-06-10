const express = require('express')  // imports the express module
const { join } = require('path')  // used for joining directory names
const app = express() // creates an instance of the express module
const portNum = 3000  // the local port number we are listening on

// 3 lines we must include in our application
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// imports the api and html routes
require("./apiRoutes.js")(app)
require("./htmlRoutes.js")(app)

// this line runs our server, process.env.PORT is for Heroku deployment, portNum is for localhost
app.listen(process.env.PORT || portNum, () => {
  if (process.env.PORT) {
    // do something with Heroku here
    console.log('Currently running on Heroku.....')
  } else {
    // do something with localhost here
    console.log(`Listening at port ${portNum}...`)
  }
})