class CueBall extends Ball {
	constructor(pos) {
		super(pos, "#f7f7ff");
	}

	shoot(velocity) {
		this.velocity = velocity;
	}
}
