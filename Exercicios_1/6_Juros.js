/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capitalInicial, taxa, tempo){
  const juros = capitalInicial * taxa * tempo
  const montante = capitalInicial + juros
  return montante
}

function jurosCompostos(capitalInicial, taxa, tempo){
  const montante = capitalInicial*(1+taxa)**tempo
  return montante
}

console.log(jurosSimples(500, 2.5, 5))
console.log(jurosCompostos(300,0.4,4).toFixed(2))