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

  asUnitVector() {
    return Vector.scale(this, 1 / this.magnitude);
  }

  distanceFrom(vector) {
    return Vector.subtract(this, vector).magnitude;
  }

  flipX() {
    this.x *= -1;
  }

  flipY() {
    this.y *= -1;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  subtract(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  }

  mult(vector) {
    this.x *= vector.x;
    this.y *= vector.y;
  }

  scale(factor) {
    this.x *= factor;
    this.y *= factor;
  }

  copy() {
    return new Vector(this.x, this.y);
  }

  static add(v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y);
  }

  static subtract(v1, v2) {
    return new Vector(v1.x - v2.x, v1.y - v2.y);
  }

  static mult(v1, v2) {
    return new Vector(v1.x * v2.x, v1.y * v2.y);
  }

  static scale(vector, factor) {
    return new Vector(vector.x * factor, vector.y * factor);
  }

  static dotProduct(v1, v2) {
    return v1.x*v2.x + v1.y*v2.y;
  }
}
