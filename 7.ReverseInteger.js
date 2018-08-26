var reverse = function(x, y = 0, output = []) {
  if (Math.sign(x) === -1) {
    y = x * -1;
  } else {
    y = x;
  }
  y = y
    .toString()
    .split('')
    .reverse()
    .join('');
  if (Number(y) > 2147483648) return 0;
  if (Math.sign(x) === -1) {
    y = '-' + y;
    return Number(y);
  }
  return Number(y);
};
