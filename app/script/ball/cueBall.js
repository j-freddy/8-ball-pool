class CueBall extends Ball {
	constructor(x, y) {
		super(x, y, "#f7f7ff");
	}

	shoot(velocity) {
		this.velocity = velocity;
	}
}
