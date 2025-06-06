/**
 * 1342. Number of Steps to Reduce a Number to Zero
 */

/**
 * Steps:
 * - currentRes
 * - keep in loop(
 * - if num is even (num % 2 === 0) ==> currentRes = num / 2
 * - if num is odd ==> currentRes = num - 1;
 * - num = currentRes)
 */

/**
 * @param {number} num
 * @return {number}
 */

/* 
let countToReduceZero = 0;
while (num !== 0 && num > 0) {
  countToReduceZero++;
  let currentRes;
  if (num % 2 === 0) {
    currentRes = num / 2;
  } else {
    currentRes = num - 1;
  }
  num = currentRes;
}
return countToReduceZero;
 */

var numberOfSteps = function (num) {
  let countToReduceZero = 0;
  while (num > 0) {
    countToReduceZero++;
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num - 1;
    }
  }
  return countToReduceZero;
};

console.log(numberOfSteps(8));
console.log(numberOfSteps(14));
