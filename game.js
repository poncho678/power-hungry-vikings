class Game {
  constructor() {
    this.player = new Player();
    // we know the game will have several obstacles throughout its existence, so we make an array
    this.obstacles = [];
    this.background = new Background();
  }

  preload() {
    this.player.preload();
    this.background.preload();
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();

    // 60fps (frames per second)
    // 180 -> 60 * 3 -> 3 seconds
    // frameCount % 180 === 0 -> whenever frameCount is a multiple of 180
    // therefore every 3 seconds
    if (frameCount % 75 === 0) {
      // if (frameCount % 180 === 0) {
      this.obstacles.push(new Obstacle());
    }

    this.obstacles.forEach((obstacle, index) => {
      obstacle.drawObstacle();

      //   if (obstacle.left <= 0 - obstacle.width)
      if (obstacle.left <= -obstacle.width) {
        this.obstacles.splice(index, 1);
      }
    });
  }

  keyPressed() {
    this.player.keyPressed();
  }
}
