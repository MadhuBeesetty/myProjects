/*

Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].

*/

var minCostClimbingStairs = function(cost, i = 2) {
  if (i === cost.length) return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
  cost[i] = Math.min(cost[i] + cost[i - 1], cost[i] + cost[i - 2]);
  return minCostClimbingStairs(cost, i + 1);
};
