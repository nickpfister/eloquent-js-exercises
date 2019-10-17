// Reminder: a higher order function operates on other functions
// either by taking them as an argument or returning them. It doesn't
// need to do both.

function loop(value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}

loop(0, i => i < 10, i => i + 2, i => console.log(i));