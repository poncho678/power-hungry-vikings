class Diarrhea {
  constructor() {
    this.left = 0;
    this.top = 0;
    this.width = 0;
    this.isAttached = true;
  }

  followGeoggreysAss(left, top) {
    if (!this.isAttached) {
      return;
    }
    this.left = left;
    this.top = top;
    this.width += 2;
  }

  drawLiquidPoop(isStillAttachedToJoffrey, functionFromParent) {
    if (!isStillAttachedToJoffrey) {
      this.isAttached = false;
    }
    rect(this.left, this.top, this.width, 10);

    if (!this.isAttached) {
      this.left += 2;
    }

    if (this.isPoopieOffCanvas() && typeof functionFromParent === "function") {
      functionFromParent();
    }
  }

  isPoopieOffCanvas() {
    return this.left >= CANVAS_WIDTH;
  }
}
