const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

// connect to DB
mongoose
  .connect('mongodb://localhost/iplytics-challenge', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
  

  app.use(express.static(path.join(__dirname, '../client/build')))
  app.use(express.json())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())
  
  // Set "Access-Control-Allow-Origin" header
  app.use(cors({
    origin: (origin, cb) => {
      cb(null, origin && origin.startsWith('http://localhost:'))
    },
    optionsSuccessStatus: 200,
    credentials: true
  }))
    
  app.use('/api', require('./routes/index'))


// Error handler
app.use((err, req, res, next) => {
  console.error("----- An error happened -----")
  console.error(err)

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(err.status || 500)

    // A limited amount of information sent in production
    if (process.env.NODE_ENV === 'production')
      res.json(err)
    else
      res.json(JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err))))
  }
})

module.exports = app
