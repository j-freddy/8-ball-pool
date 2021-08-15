class Game {
	cueBall;

	constructor() {
		this.cueBall = new CueBall(new Vector(280, 250));
	}

	update() {
		this.cueBall.update();
	}

	draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.save();
		ctx.fillStyle = "#bdd5ea"
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.restore();

		this.cueBall.draw();
	}
}
