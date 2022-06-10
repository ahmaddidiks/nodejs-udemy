const fs = require('fs')
const path = require('path')

module.exports = class Cart{
    static path = path.join( 
        path.dirname(process.mainModule.filename),
        'data',
        'cart.json'
      )

    static addProduct(id, productPrice){
        // fetch the previous cart
        fs.readFile(Cart.path, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0}
            if (!err){
                cart = JSON.parse(fileContent)
            }
            // find the product in the cart
            const existingProductIndex = cart.products.findIndex( prod => prod.id === id )
            const existingProduct = cart.products[existingProductIndex]

            // update the product quantity
            let updatetedProduct
            if (existingProduct){
                updatetedProduct = {...existingProduct}
                updatetedProduct.qty = updatetedProduct.qty + 1
                cart.products = [...cart.products]
                cart.products[existingProductIndex] = updatetedProduct
            }
            else{ 
                updatetedProduct = { id: id, qty: 1 }
                cart.products = [...cart.products, updatetedProduct]
            } 
            cart.totalPrice = cart.totalPrice + +productPrice
            fs.writeFile(Cart.path, JSON.stringify(cart), err => {
                console.log(err)
            })
        })
    }
}