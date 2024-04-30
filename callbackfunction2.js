const grades = [7.5, 3.4, 6.8, 5.5, 8.0, 9.5]

// Without callback

let lowGrades = []

for(let i in grades){
  if(grades[i]<7){
    lowGrades.push(grades[i])
  }
}

console.log(lowGrades)

// With callback

const lowGrades2 = grades.filter(function(grade){return grade < 7})

console.log(lowGrades2)

// With callback and arrow function

const lowGrades3 = grades.filter(grade => grade < 7)

console.log(lowGrades3)