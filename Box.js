class Box {
  constructor(x, y, width, height) {
    var options = {
      isStatic: false
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;

    World.add(world, this.body);
  }
  display() {
    if (this.body.speed < 4) {
      var pos = this.body.position;

      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);

    } else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      pop();
    }
  }
  score() {
    if (this.visibility < 0 && this.visibility > -105) {
      score++;
    }
  }
};


