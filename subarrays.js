//given an array and chunk size form array of small chunk size

const fun = (arr, num, i=0, arr1 = [], arr2 = []) => {
  if(arr.length < i) return arr1;
  if(arr2.length == num){
    arr1.push(arr2);
    return fun (arr, num, i, arr1, arr2 = [])
  }
  arr2.push(arr[i]);
  return fun(arr,num,i+1,arr1,arr2);
}

console.log(fun([1,2,3,4,5,6],2));

// using splice

const fun1 = (arr, num, arr1=[]) => {
if(arr.length == 0) return arr1;
arr1.push(arr.splice(0,num));
return fun1 (arr,num,arr1);
}

console.log(fun1([1,2,3,4,5,6],2));
