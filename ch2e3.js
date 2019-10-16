let output = "";
let size = 3;
for (let col = 0; col < size; col++) {
  for (let row = 0; row < size; row++) {
    if (col % 2 != row % 2) {
      output += "#";
    } else {
      output += " ";
    }
  }
  output += "\n";
}
console.log(output);
