/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let previousElemSum = 0;
  for (let i = 0; i < nums.length; i++) {
    previousSum = nums[i] + previousElemSum;
    nums[i] = previousSum;
    previousElemSum = previousSum;
  }
  return nums;
};

console.log(runningSum([1, 2, 3, 4]));
