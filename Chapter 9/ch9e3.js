// 1. Accepts a minus/plus in front of the number
// 2. Accepts correct decimals
// 3. Accepts exponent notation with plus/minus on exponent

// Fill in this regular expression.
let number = /^[+-]?((\d+[.]?)|([.]?\d+)|(\d+[.]\d+))((e[+-]?\d+))?$/i;

// Tests:
let failed = false;
let yes = ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"];
let no = ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."];
for (let str of yes) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
    failed = true;
  }
}
if (!failed) console.log("Passed test 1!");

failed = false;
for (let str of no) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
    failed = true;
  }
}
if (!failed) console.log("Passed test 2!");
