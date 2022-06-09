const products = []

exports.add = (req, res, next) => { // add product page
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formCSS: true,
        activeAddProduct: true,
        productCSS: true
    })
}

exports.post = (req, res, next) => { // add product
    products.push({ title: req.body.title })
    res.redirect('/admin/add-product')
}

exports.get = (req, res, next) => { // get all products
    res.render('shop', {
        products: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    })
}