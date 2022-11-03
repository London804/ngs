// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 } = Math;

// With require
// const { readFile } = require('fs');


// const circle = {
//   label: 'circleX',
//   radius: 2,
// };
//
const circleArea = ({ radius }, { precision = 2 } = {}) =>
    (PI * radius * radius).toFixed(2);

  // if precision exists, but it's undefined it will be 2 by default
  // the object after means it's optional
//
// console.log(
//   circleArea(circle)
// );
