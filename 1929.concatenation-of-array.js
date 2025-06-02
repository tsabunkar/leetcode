/*
 * @lc app=leetcode id=1929 lang=javascript
 *
 * [1929] Concatenation of Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const ans = [];
  for (let index = 0; index < nums.length; index++) {
    let element = nums[index];
    ans[index] = element;
    ans[index + nums.length] = element;
  }
  return ans;
};
// @lc code=end
