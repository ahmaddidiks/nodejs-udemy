const express = require('express')
const router = express.Router()
const productController = require('../controllers/product')

// /admin/add-product => GET
router.get( '/add-product', productController.add)

// /admin/add-product => POST
router.post( '/add-product', productController.post)

module.exports.router = router
