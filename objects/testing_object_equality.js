let objectsEqual = function(obj1, obj2) {
  let obj1Keys = Object.keys(obj1).sort()
  let obj2Keys = Object.keys(obj2).sort()
  if (obj1Keys.length !== obj2Keys.length) return false;
  return obj1Keys.every((key, i) => (obj1[key] === obj2[key]) && (obj1Keys[i] === obj2Keys[i]))
};

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({2: 100, 1: 'now'}, {1: 'now', 2: 100}));      // true
