const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded()) // req body parser


app.use( '/add-product', (req, res, next) => { // test page
    res.send('<form action="/product" method="POST"><input type="text" name="title"> <button type="submit"> Add product </button></form>')
})

app.use( '/product', (req, res, next) => { // test page
    console.log(req.body)
    res.redirect('/')
})

app.use( '/', (req, res, next) => { // main page
    res.send("<h1> Hello from express </h1>")
})

app.listen(3000)

