class Player {
  constructor() {
    this.left = 50;
    this.top = 0;
    this.width = 50;
    this.height = 50;
    this.velocity = 0;
    this.floor = 400;
    this.jumpCount = 0;
    this.bullet = "💩";
  }

  preload() {
    this.img = loadImage("./images/character-left.png");
  }

  jump() {
    if (this.jumpCount === 2) {
      return;
    }
    this.top -= 45;
    this.velocity -= 5;
    this.jumpCount++;
  }

  keyPressed() {
    if (keyCode === SPACE_BAR) {
      this.jump();
    }
  }

  drawPlayer() {
    // per each frame, geoffrey, our chinless viking, gains more momentum towards the floor
    this.velocity += GRAVITY;
    this.top += this.velocity;
    image(this.img, this.left, this.top, this.width, this.height);

    // whenever geoffrey, our chinless viking, reaches the floor, it stops falling. we say that geoffrey, our chinless viking, wont go anywhere below the floor and now gravity wont pull geoffrey, our chinless viking, with more strength. he is not falling
    if (this.hasReachedTheGround()) {
      this.top = this.floor;
      this.velocity = 0;
      this.jumpCount = 0;
    }
  }

  hasReachedTheGround() {
    return this.top >= this.floor;
  }
}
