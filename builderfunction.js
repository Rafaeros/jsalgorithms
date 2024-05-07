function Car(maxSpeed = 200, speed = 10){
  // private attribute
  let currentSpeed = 0
  
  // public method

  this.acelerate = function () {
    if( currentSpeed + speed <= maxSpeed ){
      currentSpeed += speed
    } else {
      currentSpeed = maxSpeed
    }
  }

  // Getter
  this.getCurrentSpeed = function () {
    return currentSpeed
  }
}

// Initializing a object using the default parameters setted at the function declaration

let bmw = new Car
bmw.acelerate()
bmw.acelerate()
console.log(bmw.getCurrentSpeed())

// Initializing a object passing the parameters on the function

let ferrari = new Car(300, 20)
ferrari.acelerate()
ferrari.acelerate()
ferrari.acelerate()
console.log(ferrari.getCurrentSpeed())