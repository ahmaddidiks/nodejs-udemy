const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

module.exports = class Product{
  
  constructor(title){
      this.title = title
      
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
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    })
  }

  save() {
      this.getProductsFromFile(products => {
        products.push(this);
        fs.writeFile(Product.path, JSON.stringify(products), err => {
          console.log(err);
        });
      });
    }

  static fetchAll(cb) {
    this.getProductsFromFile(cb);
  }
}