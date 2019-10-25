// This one was really hard. The key was understanding
// I could group things differently. Had to look up the
// answer.

let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
//let match = /([^\w]')|('[^\w])|(^')|('$)/g.exec(text);
let match = text.match(/([^\w]')|('[^\w])|(^')|('$)/g);
console.log(match);
// This replaces the match by taking the group 1 or 2 and
// adding a double quote before or after it.
console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."
