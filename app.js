const express = require('express')
const bodyParser = require('body-parser')
const errorController = require('./controllers/error')

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

app.use(bodyParser.urlencoded()) // req body parser
app.use(express.static('public')) // static files

app.use('/admin', adminRouter.router)
app.use(shopRouter)

app.use(errorController.get404)

app.listen(3000)