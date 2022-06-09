const express = require('express')
const router = express.Router()

const adminRouter = require('./admin')
// /shop/ => GET
router.get( '/', (req, res, next) => { // main page
    res.render('shop', {
        products: adminRouter.products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: adminRouter.products.length > 0,
        activeShop: true,
        productCSS: true
    })
})

module.exports = router
