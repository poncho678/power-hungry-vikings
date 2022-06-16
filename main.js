// let img;

const game = new Game();

function setup() {
  createCanvas(750, 500);
}

function draw() {
  background("orange");
  game.play();
}

function preload() {
  game.preload();
  vikingImagePowerfulAndStrong = loadImage("./images/character-right.png");
  //   img = loadImage("./images/character-right.png");
}

function keyPressed() {
  game.keyPressed();
}

const whatever = new Diarrhea();

function heyPelayo() {
  console.log("HEYA GOOD LOOKING");
}

whatever.drawLiquidPoop(false, heyPelayo);
