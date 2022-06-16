class Player {
  constructor() {
    this.left = 50;
    this.top = 0;
    this.width = 50;
    this.height = 50;
    this.velocity = 0;
    this.floor = 412;
    this.jumpCount = 0;
    this.bullet = "💩";
    // shitHole
    this.poopArray = [];
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

  shootPoop() {
    this.poopArray.push(new Poop(this.top + 40, this.left + 30));
  }

  keyPressed() {
    if (keyCode === ARROW_UP) {
      this.jump();
    }
    if (keyCode === SPACE_BAR) {
      this.shootPoop();
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

    this.poopArray.forEach((poopie) => {
      poopie.throwPoopies();
    });

    this.flush();
  }

  hasReachedTheGround() {
    return this.top >= this.floor;
  }

  flush() {
    this.poopArray.forEach((poopie, _, array) => {
      if (poopie.left >= CANVAS_WIDTH) {
        array.shift();
      }
    });
  }
}
