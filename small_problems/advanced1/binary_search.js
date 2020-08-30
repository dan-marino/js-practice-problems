function binarySearch(arr, search) {
  let arrCopy = arr.slice();
  let mid = Math.floor(arr.length / 2);
  let idxOffset = 0;

  if (arr[mid] === search) return mid;
  if (arr.length === 1) return -1;

  arr[mid] < search ? idxOffset += arrCopy.splice(0, mid).length : arrCopy.splice(mid);

  let idx = binarySearch(arrCopy, search);
  return idx === -1 ? idx : idx + idxOffset;
}

var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0
console.log(binarySearch(yellowPages, 'Eat a Lot'));                  // 4

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6

// input array, string
// output number indicating index

// find middle point,
// return index at middle point if that === query
// if query > than middle point, subSearch = array.slice(middle point + 1)
// midPoint += subSearch / 2
// else binarySearch from array.slice(0, middle point)
