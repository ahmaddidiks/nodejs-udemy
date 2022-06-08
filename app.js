const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

app.use(bodyParser.urlencoded()) // req body parser
app.use(express.static('public')) // static files

app.use('/admin', adminRouter)
app.use('/shop', shopRouter)

app.use((req, res, next) => {
    res.status(404).sendFile('404.html', {root: 'views'})
})

app.listen(3000)

