Array.prototype.filter2 = function(callback){
  const newArray = []
  for(let i = 0; i < this.length; i++){
    if(callback(this[i], i, this)){
      newArray.push(this[i])
      console.log(callback)
    }
  }
  return newArray
}

const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true},
  { nome: 'Ipad Pro', preco: 4199, fragil: true},
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

const fragil = produto => produto.fragil
const barato = produto => produto.preco <=20
const caro = produto => produto.preco > 1000

console.log(produtos.filter(fragil))
console.log(produtos.filter(barato))
console.log(produtos.filter(caro))

console.log(produtos.filter2(barato))