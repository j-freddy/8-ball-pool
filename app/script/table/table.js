class Table {
  walls;

  constructor() {
    this.walls = [
      new Wall("RIGHT", 30, 30, 6, 390),
      new Wall("DOWN", 30, 30, 627, 6),
      new Wall("LEFT", 651, 30, 6, 390),
      new Wall("UP", 30, 414, 627, 6),
    ];
  }

  drawSurface() {
    ctx.save();
    ctx.fillStyle = "#bdd5ea"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }

  draw(scale=1) {
    this.drawSurface();

    this.walls.forEach(wall => {
      wall.draw(scale);
    });
  }
}
