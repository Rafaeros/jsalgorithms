let a = 7
let b = 15

console.log(a, b)

function switchValues(n1, n2) {
  let aux = 0
  aux = n1
  n1 = n2
  n2 = aux
  console.log(n1, n2)
}

switchValues(a, b)

//Other option to switchvalues
console.log(([a, b] = [b, a]))
