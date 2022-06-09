const express = require('express')
const router = express.Router()

const adminRouter = require('./admin')
// /shop/ => GET
router.get( '/', (req, res, next) => { // main page
    res.render('shop', {products: adminRouter.products, pageTitle: 'Shop', path: '/'})
})

module.exports = router
