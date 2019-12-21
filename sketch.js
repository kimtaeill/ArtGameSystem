let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

var bgm ;
let img1 ;
let img2 ;
let img3 ;
let img4 ;
let img5 ;
let img6 ;
let img7 ;

function preload(){
  bgm = loadSound("bgm.mp3");
  img1 = loadImage('puzzle0.png');
  img2 = loadImage('puzzle00.png');
  img3 = loadImage('puzzle1.png');
  img4 = loadImage('puzzle2.png');
  img5 = loadImage('puzzle3.png');
  img6 = loadImage('puzzle4.png');
  img7 = loadImage('puzzle5.png');
}

function setup() {
  bgm.play();
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
}

function draw() {

  if (mouseIsPressed == true) {
    image(img2, 0, 0);
  }
   else {
    image(img1, 0, 0);
  }

 if (keyIsPressed === true) {
    image(img3, 0, 0);
 }
}
