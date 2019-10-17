function deepEqual(a, b) {
  // This will be true only if the two variables
  // are the same object, or non-objects with the same value.
  if (a === b) return true;

  // This checks if the two are different non-objects, and the
  // bizzare null object case.
  if (typeof a != "object" || typeof b != "object" || a == null || b == null) {
    return false;
  }

  // Now we finally check individual keys
  let k1 = Object.keys(a);
  let k2 = Object.keys(b);
  if (k1.length != k2.length) return false;
  for (let i = 0; i < k1.length; i++) {
    if (k1[i] != k2[i]) return false;
    else if (!deepEqual(a[k1[i]], b[k1[i]])) return false;
  }
  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
