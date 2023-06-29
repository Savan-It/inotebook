const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()

app.use(cors())
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.json())
app.use('/api/auth', require('./routes/auth'))
app.use('/api/note', require('./routes/note'))

app.listen(port, () => {
  console.log(`GoodNews app listening on port http://localhost:${port}`)
})