// Variables
const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

const backgroundImage = new Image()
const carImage = new Image()

const ground = 430
const gravity = 4

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

let runner = {
  image: new Image(),
  width: 60,
  height: 60,
  coordinates: {
    x: 10,
    y: ground - 60
  }
}

let jump = {
  state: 'none'
}

// Image sources
backgroundImage.src = "images/background.png"
car.image.src = "images/car.png"
runner.image.src = "images/runner_ani.gif"

// Jump functionality
function jumpUp(){
  if (jump.state === 'none'){
    jump.state = 'up'
  }
}

canvas.addEventListener("click", jumpUp)

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

  // Animate jump
  if (jump.state === 'up') {
    runner.coordinates.y -= gravity
  }
  if (jump.state === 'up' && runner.coordinates.y < 220) {
    jump.state = 'down'
  }
  if (jump.state === 'down'){
    runner.coordinates.y += gravity
  }
  if (jump.state === 'down' && runner.coordinates.y === ground - runner.height) {
    jump.state = 'none'
  }

  context.drawImage(runner.image, runner.coordinates.x, runner.coordinates.y, runner.width, runner.height)

  requestAnimationFrame(draw)
}
draw()
