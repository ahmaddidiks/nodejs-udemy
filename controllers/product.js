const Product = require('../models/product')

exports.addProduct = (req, res, next) => { // add product page
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formCSS: true,
        activeAddProduct: true,
        productCSS: true
    })
}

exports.postProduct = (req, res, next) => { // add product
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/admin/add-product')
}

exports.getAllProduct = (req, res, next) => { // get all products
    Product.fetchAll(products => {
        res.render('shop', {
          products: products,
          pageTitle: 'Shop',
          path: '/',
          hasProducts: products.length > 0,
          activeShop: true,
          productCSS: true
        })
      })
}