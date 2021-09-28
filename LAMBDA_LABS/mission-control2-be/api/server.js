const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const authRouter = require('../auth/auth-router')
const personsRouter = require('./persons/persons-router')
const programsRouter = require('./programs/programs-router')
const productsRouter = require('./products/products-router')
const projectsRouter = require('./projects/projects-router')
const tagsRouter = require('./tags/tags-router')

const server = express()

server.use(cors())
server.use(helmet())
server.use(morgan('combined'))
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/persons', personsRouter)
server.use('/api/programs', programsRouter)
server.use('/api/products', productsRouter)
server.use('/api/projects', projectsRouter)
server.use('/api/tags', tagsRouter)

server.get('/', (req, res) => {
  res.status(200).json({ api: 'We Up' })
})

module.exports = server
