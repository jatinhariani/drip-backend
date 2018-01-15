import './env'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import api from './api'

const app = express()

// express middleware
app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use('/api', api())

app.listen(process.env.PORT, function () {
  console.log('App listening on port ' + process.env.PORT)
})
