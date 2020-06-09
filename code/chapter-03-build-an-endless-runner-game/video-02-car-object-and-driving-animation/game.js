const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

// Variables
const backgroundImage = new Image()
const carImage = new Image()

const ground = 430

let car = {
  image: new Image(),
  width: 60,
  height: 60,
  speed: 3,
  x: canvas.width,
  y: ground - 60
}

// Image sources
backgroundImage.src = "images/background.png"
car.image.src = "images/car.png"

function draw(){
  context.drawImage(backgroundImage, 0, 0)
  car.x =  car.x - car.speed
  context.drawImage(car.image, car.x, car.y, car.width, car.height)
  requestAnimationFrame(draw)
}
draw()
