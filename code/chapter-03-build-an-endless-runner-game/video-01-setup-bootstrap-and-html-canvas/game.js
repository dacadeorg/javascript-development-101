const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

const backgroundImage = new Image()
backgroundImage.src = "images/background.png"

function draw(){
  context.drawImage(backgroundImage, 0, 0)
  requestAnimationFrame(draw)
}
draw()