// Variables
const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

const backgroundImage = new Image()
const carImage = new Image()

const ground = 430

let car = {
  image: new Image(),
  width: 60,
  height: 60,
  speed: 3
}

let cars = []
cars[0] = {
  x: canvas.width,
  y: ground - car.height
}

// Image sources
backgroundImage.src = "images/background.png"
car.image.src = "images/car.png"

// Draw function
function draw(){
  context.drawImage(backgroundImage, 0, 0)

  // Cars
  for(let i = 0; i < cars.length; i++){

    // Move car
    cars[i].x =  cars[i].x - car.speed

    // Create new car
    if( cars[i].x < 180 && cars.length === 1){
      cars.push({
        x: canvas.width + (Math.random() * 100) + 80,
        y: ground - car.height
      })
    }

    // Delete car when it is out of the screen
    if(cars[i].x < -car.width){
      setTimeout( function() {
        cars.shift()
      }, 0);
    }
    context.drawImage(car.image, cars[i].x, cars[i].y, car.width, car.height)
  }
  requestAnimationFrame(draw)
}
draw()