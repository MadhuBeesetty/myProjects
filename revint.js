const fun =(num) => {
  if(num > 0){
    return parseInt(num.toString().split('').reverse().join(''));
  }else {
  return parseInt('-'+num.toString().split('').reverse().join(''));
  }
  return fun(num)*Math.sign(num);
};
console.log(fun(112345));
console.log(fun(-112345));


