const fun = (str) => {
  if (str.split('').reverse().join('') === str){
    return true;
  }else{
    return false
  };
}

console.log(fun('dad'));
console.log(fun('madhu'));
