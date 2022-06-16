class Poop {
  constructor(top, left) {
    this.top = top;
    this.left = left;
  }

  throwPoopies() {
    textSize(20);
    text("💩", this.left, this.top);
    // rect(this.left, this.top, 5, 5);
    this.left += 1;
  }
}
