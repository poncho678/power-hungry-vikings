class Game {
  constructor() {
    // this is going to be geoffrey, our chinless viking
    this.player = new Player();
    // we know the game will have several obstacles throughout its existence, so we make an array
    this.obstacles = [];
    this.background = new Background();
    this.shitstorm = new Shitstorm();
  }

  preload() {
    this.player.preload();
    this.background.preload();
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();
    this.shitstorm.draw();

    // 60fps (frames per second)
    // 180 -> 60 * 3 -> 3 seconds
    // frameCount % 180 === 0 -> whenever frameCount is a multiple of 180
    // therefore every 3 seconds === 180 frameCount
    // eventualy, we moved to 75, for them to appear faster, its up to you to choose interval
    if (frameCount % 75 === 0) {
      // if (frameCount % 180 === 0) {
      this.obstacles.push(new Obstacle());
    }

    this.obstacles = this.obstacles.filter((obstacle) => {
      obstacle.drawObstacle();

      return obstacle.left >= -obstacle.width;
    });

    this.shitstorm.stormArray.forEach((item) => {
      if (this.stormCollision(this.player, item)) {
        this.shitstorm.stormArray = this.shitstorm.stormArray.filter(
          (element) => {
            return element !== item;
          }
        );
      }
    });
  }

  keyPressed() {
    this.player.keyPressed();
  }
  stormCollision(player, shitStormItem) {
    const bottomOfA = player.top + player.height;
    const topOfB = shitStormItem.top;
    const isBottomOfABiggerThanTopOfB = bottomOfA >= topOfB;

    const topOfA = player.top;
    const bottomOfB = shitStormItem.top + shitStormItem.height;
    const isBottomOfASmallerThanBottomOfB = topOfA <= bottomOfB;

    const leftOfA = player.left;
    const rightOfB = shitStormItem.left + shitStormItem.width;
    const isLeftOfASmallerThanRightOfB = leftOfA <= rightOfB;

    const rightOfA = player.left + player.width;
    const leftOfB = shitStormItem.left;
    const isRightOfABiggerThanLeftOfB = rightOfA >= leftOfB;

    return (
      isBottomOfABiggerThanTopOfB &&
      isBottomOfASmallerThanBottomOfB &&
      isLeftOfASmallerThanRightOfB &&
      isRightOfABiggerThanLeftOfB
    );
  }
}

// this was the previous implementation of drawing + removing obstacles. This was bad, now we have a better one
// this.obstacles.forEach((obstacle, index) => {
//   obstacle.drawObstacle();

//   //   if (obstacle.left <= 0 - obstacle.width)
//   if (obstacle.left <= -obstacle.width) {
//     this.obstacles.splice(index, 1);
//   }
// });
