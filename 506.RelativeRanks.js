/*
Input: [5, 4, 3, 2, 1]
Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
For the left two athletes, you just need to output their relative ranks according to their scores.
*/

var findRelativeRanks = function(nums) {
  var num1 = JSON.parse(JSON.stringify(nums));
  num1.sort(function(a, b) {
    return b - a;
  });
  nums[nums.indexOf(num1[0])] = 'Gold Medal';
  nums[nums.indexOf(num1[1])] = 'Silver Medal';
  nums[nums.indexOf(num1[2])] = 'Bronze Medal';
  for (var i = 3; i < nums.length; i++) {
    nums[nums.indexOf(num1[i])] = (i + 1).toString();
  }
  return nums;
};
