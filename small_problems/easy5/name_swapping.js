// function swapName(string) {
//   return string.split(' ').reverse().join(', ');
// }

// Further Exploration

function swapName(string) {
  let nameCopy = string.slice().split(' ');
  let lastName = nameCopy.pop();
  return lastName + ', ' + nameCopy.join(' ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Joe Hans Roberts'));    // "Roberts, Joe"
