
let startColor = 255;
let speedAnimate = 1;
function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(255);
  
  if(startColor > width + 255 || startColor < 255) {
    speedAnimate *= -1;
  }
  startColor += speedAnimate;
  
  let gap = 1;
  let numRectangles = 20;
  let rectWidth = width / numRectangles;
  for (let x = 0; x < width; x += gap + rectWidth) {
    let green = startColor - x;
    let red = 255;
    fill(red, green, 0);
    rect(x, 0, rectWidth, height)
  }
}