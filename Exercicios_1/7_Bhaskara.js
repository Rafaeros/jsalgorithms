/* 07) 
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, 
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três 
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo 
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: 
“Delta é negativo”.
 */

function Bhaskara(ax2, bx, c){
  const resultado = []
  const Delta = (bx**2)-(4*ax2*c)
  const raizDelta = Math.sqrt(Delta)

  if(Delta >= 0){
    const x1 = ((-bx)+(raizDelta))/(2*ax2)
    const x2 = ((-bx)-(raizDelta))/(2*ax2)
    resultado.push(x1,x2)
    console.log(resultado)

  }else{
    console.log("O Delta é negativo!")
  }
}

Bhaskara(3,5,-2)