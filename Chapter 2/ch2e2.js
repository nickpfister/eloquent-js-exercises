for (let count = 1; count <= 100; count++) {
  let phrase = "";
  if (count % 3 == 0) {
    phrase += "Fizz";
  }
  if (count % 5 == 0) {
    phrase += "Buzz";
  }
  console.log(phrase || count);
}
