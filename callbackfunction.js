const fruits = ["Apple", "Orange", "Grape"]

function print(name, index){
  console.log(`${index + 1}. ${name}`)
}

fruits.forEach(print)

fruits.forEach(function(fruits){
  console.log(fruits)
})