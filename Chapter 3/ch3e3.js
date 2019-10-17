function countBs(string) {
  return countLetters(string, "B");
}

function countLetters(string, letter){
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      count++;
    }
  }
  return count;
}

console.log(countLetters("Eichhornchen","h"));
console.log(countBs("BUBBLES"));