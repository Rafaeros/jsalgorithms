//Factory function

function createProduct(){
  return {
    name: "Smartphone",
    price: 500
  }
}

product1 = createProduct()
console.log(product1)

product2 = createProduct()
console.log(product2)

//Factory function with parameters

function createProduct2(name, price){
  return {
    name: name,
    price: price
  }
}

product3 = createProduct2("Laptop", 500)
console.log(product3)

product4 = createProduct2("TV", 700)
console.log(product4)