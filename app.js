const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

app.use(bodyParser.urlencoded()) // req body parser
app.use(express.static('public')) // static files

app.use('/admin', adminRouter.router)
app.use('/', shopRouter)

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not Found'})
})

app.listen(3000)

