const express = require('express')
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars')

const app = express()
app.engine(
    'hbs',
    expressHbs.engine({
      layoutsDir: 'views/layouts/',
      defaultLayout: 'main-layout',
      extname: 'hbs'
    })
  )
app.set('view engine', 'hbs')
app.set('views', 'views')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

app.use(bodyParser.urlencoded()) // req body parser
app.use(express.static('public')) // static files

app.use('/admin', adminRouter.router)
app.use(shopRouter)

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not Found'})
})

app.listen(3000)

