//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function calc(x,y){
  let sum = x + y
  let sub = x - y
  let mult = x * y
  let div = x / y

  console.log(`Sum: ${sum}, Sub: ${sub}, Mult: ${mult}, Div: ${div}`)
}

calc(10,5)