// Traditional Function

function sum(a, b){
  console.log(a+b)
}

sum(7,8)

sum = function(a,b){
  console.log(a+b)
}

sum(2,7)

//Arrow Function

sum = (a,b) => {
  console.log(a+b)
}

sum(5,6)


//Arrow Function with return

sum = a => 2+a

console.log(sum(3))
