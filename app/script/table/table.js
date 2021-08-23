class Table {
  walls;
  holes;

  constructor() {
    this.walls = this.createWalls();
    this.holes = this.createHoles();
  }

  createWalls() {
    let walls = [];

    data.wall.properties.forEach(props =>
      walls.push(new Wall(props[0], props[1], props[2], props[3], props[4])));

    return walls;
  }

  createHoles() {
    let holes = [];

    data.hole.positions.forEach(pos => holes.push(new Hole(pos[0], pos[1])));

    return holes;
  }

  drawSurface() {
    ctx.save();
    ctx.fillStyle = "#bdd5ea"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }

  draw(scale=1) {
    ctx.drawImage(img.tableFrame, 0, 0, canvas.width, canvas.height);
    // this.drawSurface();
    // this.walls.forEach(wall => wall.draw(scale));
    this.holes.forEach(hole => hole.draw(scale));
  }
}
