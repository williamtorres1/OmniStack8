const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const server = express()

const routes = require('./routes')

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pqepg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333, () => {
    console.log('Back-end started!')
});