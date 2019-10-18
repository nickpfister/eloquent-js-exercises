function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.charCodeAt(0));
    return script ? script.direction : "none";
  });
  scripts = scripts.filter(s => s.name != "none");
  return scripts.reduce((a, b) => {
    return a.count > b.count ? a : b;
  }).name;
}

console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));
