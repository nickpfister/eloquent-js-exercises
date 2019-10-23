class PGroup {
  constructor(values) {
    this.values = [...values];
  }
  add(value) {
    if (this.has(value)) return this;
    return new PGroup(this.values.concat(value));
  }
  delete(value) {
    if (!this.has(value)) return this;
    return new PGroup(this.values.filter(a => a !== value));
  }
  has(value) {
    return this.values.indexOf(value) > -1;
  }
  toString() {
    return this.values.join(", ");
  }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
console.log(a.has("b"));
console.log(b.has("a"));