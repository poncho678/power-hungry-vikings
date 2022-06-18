class Shitstorm {
  constructor() {
    this.stormArray = [];
  }
  draw() {
    if (frameCount % 30 === 0) {
      this.createParticle();
    }

    this.stormArray = this.stormArray.filter((item) => {
      item.draw();
      return item.top <= CANVAS_HEIGHT;
    });
  }

  createParticle() {
    this.stormArray.push(new ShitstormItem());
  }
}
