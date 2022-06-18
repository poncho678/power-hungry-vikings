class ShitstormItem {
  constructor() {
    this.width = 20;
    this.height = 20;
    this.top = -this.height;
    this.left = random(this.width, CANVAS_WIDTH - this.width);
    this.speed = random(4, 5);
  }
  draw() {
    push();
    fill("#964B00");
    rect(this.left, this.top, this.width, this.height);
    // if (this.top <= CANVAS_FLOOR + this.height) {
    this.top += this.speed;
    // }
    pop();
  }
}
