class Group {
  constructor() {
    this.values = [];
  }
  add(value) {
    if (!this.has(value)) this.values.push(value);
  }
  delete(value) {
    this.values = this.values.filter(a => a !== value);
  }
  has(value) {
    return this.values.indexOf(value) > -1;
  }
  toString() {
    return this.values.join(", ");
  }
  static from(iterable) {
    let g = new Group();
    for (let val of iterable) {
      g.add(val);
    }
    return g;
  }
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }
  next() {
    if (this.index == this.group.values.length) return { done: true };
    let result = {
      value: this.group.values[this.index],
      done: false
    };
    this.index++;
    return result;
  }
}

let g = Group.from([1, 2, 3, 3, 4, 5]);
g.delete(2);
console.log(g.has(1));
console.log(String(g));
for (let val of g) {
  console.log(val);
}
