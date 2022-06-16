class Background {
  constructor() {
    this.left = 0;
  }
  preload() {
    this.img = loadImage("./images/background.png");
  }

  drawBackground() {
    image(this.img, this.left, 0, CANVAS_WIDTH, 500);
    image(this.img, this.left + CANVAS_WIDTH, 0, CANVAS_WIDTH, 500);
    this.left -= 4;

    if (this.left <= -CANVAS_WIDTH) {
      this.left = 0;
    }
  }
}
