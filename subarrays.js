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
