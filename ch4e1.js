function range(start, end, step = 1) {
  let array = [];
  if (step > 0) {
    for (let i = start; i <= end; i = i + step) {
      array.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i >= end; i = i + step) {
      array.push(i);
    }
  }
  return array;
}

function sum(array) {
  let sum = 0;
  for (let number of array) {
    sum += number;
  }
  return sum;
}

console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));
