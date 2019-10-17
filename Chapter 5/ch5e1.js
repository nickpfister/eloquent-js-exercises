function flatten(array) {
  return array.reduce((current, element) => {
    return current.concat(element); // Don't forget the return here
  });
}

let array = [[1, 2, 3], ["a", "b", "c"], ["hello"]];
console.log(flatten(array));
