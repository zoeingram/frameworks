const xyArr = [];
const colors = ['rgba(204, 39, 25, .75)', 'rgba(235, 199, 116, .75)', 'rgba(73, 156, 183, .75)', 'rgba(29, 76, 165, .75)'];
let timer = 0;

let content = 'DIAFONO | CON TRANSPARENCIA HAY FUTURO'; //variable for text string
let xStart = 0; //starting position of the text wall
let customFont; //variable for custom font
let c1, c2;

function getXYs() {
    for (let i = 0; i < 5; i++) {
        let x = innerWidth/10 + Math.floor(Math.random() * 400) + (Math.random() *100);
        let y = innerHeight/10 + Math.floor(Math.random() * 400);
        let s = Math.random();
        var color = colors[Math.floor(Math.random()*colors.length)];
        xyArr.push([x, y, s, color])
    }
}

function setup() {
  let cnv = createCanvas(innerWidth, innerHeight); 
  getXYs();
  textFont('Space Mono');
  textAlign(CENTER, CENTER); 
  textSize(18); 
  cnv.parent('#bkSketch');
  c1 = color(235, 199, 116);
  c2 = color(73, 156, 183);

}

function draw() { 
  setGradient(c1, c2);    
  xyArr.forEach(item=> {
        hexagon(item[0], item[1], item[2], item[3]);
    });
    scrollingText();
    // if (millis() >= 2000+timer) {
    //     getXYs();
    //     timer = millis();
    //   }
}

function scrollingText() {
    for (let x = xStart; x < width; x += 450) { //use a for loop to draw the line of text multiple times down the vertical axis
        // fill(255, y / 4 + 100, 200); //create a gradient by associating the fill color with the y location of the text
        fill(0);
        noStroke()
        text(content, x + 20, 50); //display text
      }
      xStart--; //move the starting point of the loop up to create the scrolling animation, yStart-- is the same as yStart = yStart -1 or yStart-=1
    
}
function hexagon(transX, transY, s, color) {
  noStroke()
  fill(color);
    push();
    translate(transX, transY);
    scale(s);
    beginShape();
      vertex(-75, -130);
      vertex(75, -130);
      vertex(150, 0);
      vertex(75, 130);
    vertex(-75, 130);
      vertex(-150, 0);
      endShape(CLOSE); 
      pop();
  }

  function setGradient(c1, c2) {
    // noprotect
    noFill();
    for (var y = 0; y < height; y++) {
      var inter = map(y, 0, height, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(0, y, width, y);
    }
  }