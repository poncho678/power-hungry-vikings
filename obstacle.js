class Obstacle {
  constructor() {
    this.height = random(10, 70);
    this.width = random(25, 100);
    this.top = random(150, 500 - this.height - 5); // -5 just so that its not really in the end of canvas
    this.left = CANVAS_WIDTH + 5; // left side of the obstacle is defined here. it starts off canvas
    // this.speed = random(5, 15);
    this.speed = random(1, 5);
    const randomValue = random();

    if (randomValue < 0.5) {
      this.roundness = 0;
    } else {
      this.roundness = 20;
    }
  }

  drawObstacle() {
    rect(this.left, this.top, this.width, this.height, this.roundness);

    this.left -= this.speed;

    // if (frameCount % 2 === 0) {
    //   this.top -= 5;
    // } else {
    //   this.top += 5;
    // }
  }
}
