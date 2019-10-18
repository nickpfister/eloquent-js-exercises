let myObject = {
  hasOwnProperty: "here's my property!",
  anotherProperty: "here's another property!"
};

let myObject2 = {};

console.log(myObject.hasOwnProperty);
console.log(Object.prototype.hasOwnProperty.call(myObject, "anotherProperty"));
console.log(myObject2.hasOwnProperty);
