class Game {
  scale = data.game.scale;
  cuePower = 0.04;
  table;
  cueBall;
  objectBalls;

  constructor() {
    this.table = new Table();
    this.cueBall = new CueBall(300, 300);
    this.objectBalls = [
      new SolidBall(200, 200),
      new StripedBall(400, 70)
    ];
    this.startEventHandlers();
  }

  get balls() {
    return [this.cueBall].concat(this.objectBalls);
  }

  update() {
    this.balls.forEach(ball => { ball.update(this.table.walls, this.balls); });
    this.balls.forEach(ball => { ball.move(); });
  }

  draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.fillStyle = "#bdd5ea"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    this.balls.forEach(ball => { ball.draw(this.scale); });
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
