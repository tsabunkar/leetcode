/*
 * @lc app=leetcode id=1920 lang=javascript
 *
 * [1920] Build Array from Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  const ans = [];
  for (let index = 0; index < nums.length; index++) {
    ans[index] = nums[nums[index]];
  }
  return ans;
};
// @lc code=end
