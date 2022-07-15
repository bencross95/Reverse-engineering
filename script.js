var blobWidth = 60;
var blobHeight = 60;
var blobX = Math.floor(Math.random() * window.innerWidth) - (blobWidth / 2);
var blobY = Math.floor(Math.random() * window.innerHeight) - (blobHeight / 2);

var directionX = 1;
var directionY = 1;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1')
  image1 = loadImage('images/mouseimg1.png');
}

function draw() {
  background(228, 229, 232);


  if (directionX == 1) {
    if (blobX <= window.innerWidth - 60 / 2) {
      blobX++;
    } else {
      directionX = 0;
    }
  } else {
    if (blobX >= 60 / 2) {
      blobX--;
    } else {
      directionX = 1;
    }
  }

  if (directionY == 1) {
    if (blobY <= window.innerHeight - 60 / 2) {
      blobY++;
    } else {
      directionY = 0;
    }
  } else {
    if (blobY >= 60 / 2) {
      blobY--;
    } else {
      directionY = 1;
    }
  }

  noStroke();
  fill(255, 20, 0);
  // ellipse(blobX, blobY, blobWidth, blobHeight);
  image( image1, blobX, blobY, blobWidth, blobHeight);
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
