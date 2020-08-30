function toggleLights(lightBank, light) {
  if (lightBank.includes(light)) {
    let index = lightBank.indexOf(light);
    lightBank.splice(index, 1);
  } else {
    lightBank.splice(light - 1, 0, light)
  }
}

function lightsOn(switches) {
  let lightBank = []

  for (var toggle = 1; toggle <= switches; toggle++) {
    for (var light = toggle; light <= switches; light++) {
      if (light % toggle === 0) toggleLights(lightBank, light)
    }
  }

  return lightBank;
}

// input number
// output array on numbers

// bank of lights represent true and false
// bank of lights goes from 1 to number
// every light is initially off
// you toggle all the lights for every number that is divisible by that number
// so for the first one, every light gets turned on since all numbers evenly divisible by one
// only multiples of 2 are toggled, in this case, that makes them 'off'
// on the next pass, only multiples of 3 are toggled
// so on and so forth

// empty array
// nested loop
// first loop  is to keep track of number to divide other numbers by
// second loop is to keep track of lights
// if that light is divisible by the toggle and that number is not in the number bank, add it to number bank
// if that light is divisible by the toggle and that number is in the number bank, remove it from number bank

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on


console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
