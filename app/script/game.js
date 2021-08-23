class Game {
  scale = data.game.scale;
  cuePower = 0.04;
  numBalls = data.ball.objectBallsInitialPos.length;
  numSolidBalls = data.ball.numSolidBalls;
  numStripedBalls = data.ball.numStripedBalls;
  eightBallIndex = data.ball.eightBallindex;
  table;
  cueBall;
  objectBalls;

  constructor() {
    this.table = new Table();
    this.cueBall = new CueBall(data.cueBall.initialPos[0], data.cueBall.initialPos[1]);
    this.objectBalls = this.createObjectBalls();
    this.startEventHandlers();
  }

  get balls() {
    return [this.cueBall].concat(this.objectBalls);
  }

  createObjectBalls() {
    let ballTypeChoices = [];
    for (let i = 0; i < this.numSolidBalls; i++) {
      ballTypeChoices.push("SOLID");
    }
    for (let i = 0; i < this.numStripedBalls; i++) {
      ballTypeChoices.push("STRIPED");
    }

    let balls = [];

    data.ball.objectBallsInitialPos.forEach((pos, i) => {
      let ball;

      if (i === data.ball.eightBallIndex) {
        ball = new EightBall(pos[0], pos[1]);
      } else {
        let randIndex = Math.floor(Math.random() * ballTypeChoices.length);
        let ballType = ballTypeChoices.splice(randIndex, 1)[0];

        if (ballType === "SOLID") ball = new SolidBall(pos[0], pos[1]);
        if (ballType === "STRIPED") ball = new StripedBall(pos[0], pos[1]);
      }

      balls.push(ball);
    });

    return balls;
  }

  areBallsStationary() {
    return this.balls.filter(ball => ball.velocity.magnitude > 0) === 0;
  }

  update() {
    this.balls.forEach(ball =>
      ball.update(this.table.walls, this.balls, this.table.holes));

    this.balls.forEach(ball => ball.move());

    this.objectBalls = this.objectBalls.filter(ball => !ball.potted);

    if (this.cueBall.potted) {
      this.cueBall.reset();
    }
  }

  draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.table.draw(this.scale);
    this.balls.forEach(ball => ball.draw(this.scale));
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
