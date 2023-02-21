const connectToMongo=require('./db')
const express=require('express')
const app = express()

connectToMongo();

const port = 3434

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})