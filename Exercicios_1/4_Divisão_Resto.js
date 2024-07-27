//04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.

function div(dividendo, divisor){
  let divisao = dividendo / divisor
  let resto = dividendo % divisor

  console.log(`${dividendo} : ${divisor} = ${divisao}, Resto: ${resto}`)
}

div(10,2)