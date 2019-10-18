class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  }
  minus(other) {
    return new Vector(this.x - other.x, this.y - other.y);
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

let a = new Vector(3, 4);
let b = new Vector(5, 6);
console.log(a.toString());
console.log(String(b)); // This is polymorphism
console.log(a.plus(b).toString());
console.log(a.minus(b).toString());
console.log(a.length);
console.log(b.length);
