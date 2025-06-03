/*
 * @lc app=leetcode id=1672 lang=javascript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let richCustWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    const eachCust = accounts[i];
    let sumCurrentCust = 0;
    for (let j = 0; j < eachCust.length; j++) {
      const currentWealth = eachCust[j];
      sumCurrentCust += currentWealth;
    }
    if (richCustWealth < sumCurrentCust) {
      richCustWealth = sumCurrentCust;
    }
  }
  return richCustWealth;
};
// @lc code=end

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
