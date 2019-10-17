function reverseArray(array) {
  let reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

function reverseArrayInPlace(array) {
  let len = array.length;
  for (let count = 0; count <= len / 2; count++) {
    let swap = array[count];
    array[count] = array[len - 1 - count];
    array[len - 1 - count] = swap;
  }
}

let array1 = [1, 2, 3, 4, 5];
let array2 = ["a", "b", "c", "d", "e"];
console.log(reverseArray(array1));
reverseArrayInPlace(array2);
console.log(array2);
