const express = require('express')
const router = express.Router()

const adminRouter = require('./admin')
// /shop/ => GET
router.get( '/', (req, res, next) => { // main page
    // res.send("<h1> Hello from express </h1>")
    console.log(adminRouter.products)
    res.sendFile('shop.html', {root: 'views'})
})

module.exports = router
