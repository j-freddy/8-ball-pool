class Game {
  scale = data.game.scale;
  cuePower = 0.1;
  table;
  cueBall;

  constructor() {
    this.table = new Table();
    this.cueBall = new CueBall(300, 300);
    this.startEventHandlers();
  }

  update() {
    this.cueBall.update(this.table.walls);
  }

  draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.fillStyle = "#bdd5ea"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    this.cueBall.draw(this.scale);
    this.table.draw(this.scale);
  }

  startEventHandlers() {
    canvas.addEventListener("click", (e) => {
      let cursorPos = new Vector(e.offsetX/this.scale, e.offsetY/this.scale);
      this.cueBall.shoot(
        Vector.scale(
          Vector.subtract(cursorPos, this.cueBall.pos),
          this.cuePower
        )
      );
    });
  }
}
