const express = require('express')
const router = express.Router()

// /shop/ => GET
router.get( '/', (req, res, next) => { // main page
    // res.send("<h1> Hello from express </h1>")
    res.sendFile('shop.html', {root: 'views'})
})

module.exports = router
