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

	draw(scale=1) {
		this.walls.forEach(wall => {
			wall.draw(scale);
		});
	}
}
