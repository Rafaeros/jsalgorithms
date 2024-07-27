/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function tipoTriangulo(a,b,c){
  if (a===b && b===c){
    console.log("O Triangulo é Equilátero")
  } else if (a===b || b===c || a===c){
    console.log("O Triangulo é Isósceles")
  }else {
    console.log("O Triangulo é Escaleno")
  }
}

tipoTriangulo(2,2,2)
tipoTriangulo(3,2,2)
tipoTriangulo(2,5,7)