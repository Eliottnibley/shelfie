require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctlr = require('./controller')

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
  })
  .then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('db connected')
})
.catch(err => console.log(err))

app.use(express.json())

app.post('/products', ctlr.create)
app.get('/products', ctlr.read)
app.put('/products/:id', ctlr.update)
app.delete('/products/:id', ctlr.delete)

app.listen(SERVER_PORT, () => {
  console.log(`server running on ${SERVER_PORT}`)
})