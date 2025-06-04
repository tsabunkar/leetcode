/**
 * @param {number} n
 * @return {string[]}
 */
// var fizzBuzz = function (n) {
//   let fizzBuzzArray = [];
//   console.log(fizzBuzzArray);
//   for (let index = 1; index <= n; index++) {
//     console.log(index);
//     if (index % 3 == 0) {
//       fizzBuzzArray[index] = "Fizz";
//     } else if (index % 5 == 0) {
//       fizzBuzzArray[index] = "Buzz";
//     } else if (index % 3 == 0 && index % 5 == 0) {
//       fizzBuzzArray[index] = "FizzBuzz";
//     } else {
//       fizzBuzzArray[index] = index;
//     }
//   }
//   console.log("Array length", fizzBuzzArray.length);
//   return fizzBuzzArray;
// };

// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));

/**
 * You’re getting a <1 empty item> at the beginning of your fizzBuzzArray
 * because you’re starting your loop from index = 1 and assigning values
 * using fizzBuzzArray[index].
 * In JavaScript, arrays are 0-indexed, so index 0 remains undefined.
 */

// ---- try:2

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let fizzBuzzArray = [];
  for (let index = 1; index <= n; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
      fizzBuzzArray.push("FizzBuzz");
    } else if (index % 3 == 0) {
      fizzBuzzArray.push("Fizz");
    } else if (index % 5 == 0) {
      fizzBuzzArray.push("Buzz");
    } else {
      fizzBuzzArray.push("" + index);
    }
  }
  return fizzBuzzArray;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
