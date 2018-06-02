// implement a dynamic programming to claculate minimum cost required to climb all step.
// steps are represented by a array
// you can climb one step or two steps at a time.


const fun = (arr, cost=[arr[0],arr[1]], i=2) => {
  if(arr.length == i) return Math.min(cost[arr.length-1],cost[arr.length-2]);
  cost.push(Math.min(cost[cost.length-1],cost[cost.length-2])+arr[i]);
return fun(arr, cost, i+1);
};

console.log(fun([1,10,20,15,3,6,9,8]));
console.log(fun([1,10,21,25,24,30,33,38]));
