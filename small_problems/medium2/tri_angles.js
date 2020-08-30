function triangle(...angles) {
  angles.sort((a, b) => a - b);

  if (angles[0] === 0 || angles.reduce((acc, val) => acc + val) !== 180) return 'invalid';
  else if (angles[2] > 90) return 'obtuse';
  else return (angles[2] === 90) ? 'right' : 'acute';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
