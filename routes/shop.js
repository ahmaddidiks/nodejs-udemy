const express = require('express')
const router = express.Router()

const adminRouter = require('./admin')
const productController = require('../controllers/product')
// /shop/ => GET
router.get( '/', productController.get)

module.exports = router
