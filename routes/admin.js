const express = require('express')
const router = express.Router()


// /admin/add-product => GET
router.get( '/add-product', (req, res, next) => { // test page
    res.sendFile('add-product.html', {root: 'views'})
})

// /admin/add-product => POST
router.post( '/add-product', (req, res, next) => { // test page
    console.log(req.body)
    res.redirect('/admin/add-product')
})

module.exports = router