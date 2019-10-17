// This starts from the top and goes down,
// but it is possible and perhaps cleaner to
// start at the bottom and go up. See solution.
function arrayToList(array) {
  let list = {};
  let rest = list;
  for (let i = 0; i < array.length; i++) {
    rest.value = array[i];
    if (i < array.length - 1) {
      rest.rest = {};
      rest = rest.rest;
    }
  }
  return list;
}

function listToArray(list) {
  let array = [];
  rest = list;
  while (rest) {
    array.push(rest.value);
    rest = rest.rest;
  }
  return array;
}

function prepend(list, element) {
  let newList = {
    value: element,
    rest: list
  };
  return newList;
}

function nth(list, n) {
  // Remember to check edge case: first list is undef.
  if(!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

function printList(list) {
  let rest = list;
  while (rest) {
    console.log(rest.value);
    rest = rest.rest;
  }
}

let array = [1, 2, 3, "a", "b", "c"];
let list = arrayToList(array);
let prepended = prepend(list, "hi");

printList(list);

console.log(listToArray(list));
printList(prepended);
console.log(listToArray(prepended));
console.log(nth(list, 0));
