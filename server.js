
const express = require('express')
const next = require('next')
const cors = require('cors')

const PORT = process.env.PORT || 7000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const app = express()

app.use(cors())

app.get('*', (request, response) => {
  const { query, path } = request

  const parsedUrl = {
    pathname: path,
    query
  }

  handle(request, response, parsedUrl)
})

nextApp.prepare()
  .then(() => app.listen(PORT, error => {
    if (error) return console.error('ERROR: ', error)
    console.info(`App v2 is listening on port ${PORT}`)
  }))
