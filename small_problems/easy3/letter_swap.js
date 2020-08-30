function swap(string) {
  let words = string.split(' ').map(word => word.split(''));
  return words.map(word => {
    swapFirstAndLast(word)
    return word.join('')
  }).join(' ');
}

function swapFirstAndLast(array) {
  temp = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = temp;
}


console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
