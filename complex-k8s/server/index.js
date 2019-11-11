const keys = require('./keys')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())


// Postgres Client Setup
const { Pool } = require('pg')
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
})
pgClient.on('error', () => console.log('Lost PG connection'))

app.get('/facts', async (request, response) => {
  const facts = await pgClient.query(`SELECT * FROM facts`)
  response.send(facts.rows)
})

app.get('/facts/:id', async (request, response, next) => {
  const fact = await pgClient.query(`SELECT fact_content FROM facts WHERE fact_id=${request.params.id}`)
  response.send(fact.rows[0])
})

// Error Handling
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

app.listen(5000, err => {
  console.log('Listening')
})