// using recursion and an extra array
const fib = (num, arr=[0,1]) => {
  if (arr.length > num) return arr[num-1];
arr.push(arr[arr.length-1]+arr[arr.length-2])
return fib(num, arr);
};

console.log(fib(2));
console.log(fib(50));

// without array

const fib1 = (num1) => {
  if(num1 < 2) return num1;
  return fib(num1-1) + fib(num1 -2);
};

console.log(fib1(5));
