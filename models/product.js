const fs = require('fs')
const path = require('path')

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
)

module.exports = class Product{
  constructor(title, imageUrl, description, price) {
      this.title = title
      this.imageUrl = imageUrl
      this.description = description
      this.price = price
  }

  // static = Static class methods are defined on the class itself.
  static path = path.join( 
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
  )

  static getProductsFromFile(cb) {
    console.log(Product.path)
    fs.readFile(Product.path, (err, fileContent) => {
      if (err) {
        cb([])
      } else {
        cb(JSON.parse(fileContent))
      }
    })
  }

  save() {
    this.id = Math.random().toString()
    Product.getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(Product.path, JSON.stringify(products), err => {
        console.log(err);
      })
    })
  }

  static fetchAll(cb) {
    Product.getProductsFromFile(cb)
  }

  static findById(id, cb) {
    Product.getProductsFromFile(products => {
      const product = products.find(p => p.id === id)
      cb(product)
    })
  }
}