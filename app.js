const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.static('files'))

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})
app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
  })
  