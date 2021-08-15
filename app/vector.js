/*
	Static methods have no side effects
	Non-static methods have side effects on caller

	Example:
	v1.add(v2) changes v2
	Vector.add(v1, v2) does not change v1 nor v2
*/
class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	get magnitude() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}

	add(vector) {
		this.x += vector.x;
		this.y += vector.y;
	}

	scale(factor) {
		this.x *= factor;
		this.y *= factor;
	}

	static scale(vector, factor) {
		return new Vector(vector.x * factor, vector.y * factor);
	}
}