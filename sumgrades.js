//Sum grades and return the average

//Print Function
function p(txt) {
  console.log(txt)
}

//Variables
let notas = [50, 90, 60, 70]
let sumgrades = 0

// Sum Grades
for (let i = 0; i <= notas.length; i++) {
  sumgrades = sumgrades + notas[0]
}

let average = sumgrades / notas.length

if (average > 70) {
  p('Aprovado')
  console.log('Nota: ', average)
} else if (average < 70) {
  p('Reprovado')
  console.log('Nota: ', average)
}
