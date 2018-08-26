/*
Input: "USA"
Output: True

Input: "FlaG"
Output: False
*/

var detectCapitalUse = function(word, arr = []) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) arr[i] = 1;
  }
  var a = arr.reduce((a, b) => a + b, 0);
  if (a === word.length || a === 0) return true;
  if (a === 1 && arr[0] === 1) return true;
  return false;
};
