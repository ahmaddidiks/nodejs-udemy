const express = require('express')
const router = express.Router()

const products = []

// /admin/add-product => GET
router.get( '/add-product', (req, res, next) => { // test page
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'})
})

// /admin/add-product => POST
router.post( '/add-product', (req, res, next) => { // test page
    products.push({ title: req.body.title })
    res.redirect('/admin/add-product')
})

module.exports.router = router
module.exports.products = products