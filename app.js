const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT

app.use(express.static('public'))
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res)=> {
    res.render('home', {
        name: "Jesus",
        title: "Merwebo"
    })
})
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})
app.listen(port, () => {
    console.log(`Example app listening on port 3000`)
  })
  