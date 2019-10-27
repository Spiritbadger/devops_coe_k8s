const keys = require('./keys');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())


// Postgres Client Setup
const { Pool } = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});
pgClient.on('error', () => console.log('Lost PG connection'));

/*
pgClient
    .query('CREATE TABLE IF NOT EXISTS values (fact INT)')
    .catch(err => console.log(err));

*/

// Express Route Handlers

/*
let facts = [
    {
        "id": 1,
        "content": "DevOps, the 'Dev' is silent"
    },
    {
        "id": 2,
        "content": "If it hurts, do it more often"
    },
    {
        "id": 3,
        "content": "Adding manpower to a late software project makes it later!"
    },
    {
        "id": 4,
        "content": "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time."
    },
    {
        "id": 5,
        "content": "Any fool can write code that a unicorn can understand. Good programmers write code that humans can understand."
    },
    {
        "id": 6,
        "content": "Premature optimization is the root of all evil."
    },
    {
        "id": 7,
        "content": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
    },
    {
        "id": 8,
        "content": "If you join forces with the unicorns, you will gain a powerful ally."
    }
]

*/

app.get('/facts', async (request, response) => {
    const facts = await pgClient.query(`SELECT * FROM facts;`);
    response.send(facts.rows);
});

app.get('/facts/:id', async (request, response, next) => {
    const fact = await pgClient.query(`SELECT fact_content FROM facts WHERE fact_id=${request.params.id};`);
    response.send(fact.rows[0]);
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
    console.log('Listening');
});