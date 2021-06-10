const express = require('express')
const { join } = require('path')
const app = express()
const portNum = 3000

// 3 lines we must include in our application
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require("./public/assets/js/apiRoutes.js")(app)
require("./public/assets/js/htmlRoutes.js")(app)

// this line runs our server, process.env.PORT is for Heroku deployment, portNum is for localhost
app.listen(process.env.PORT || portNum, () => {
  if (process.env.PORT) {
    // do something with Heroku here
  } else {
    console.log(`Listening at port ${portNum}...`)
  }
})