// reverse a string

const fun = (str) => {
  let arr = str.split('');
  arr.reverse();
  str = arr.join('');
  console.log(str);
}

fun('madhu');

// reverse using reduce 

const fun1 = (str1) => {
  return str1.split('').reduce((returnStr,v)=>{
  return v+returnStr;
  },'');
}

console.log(fun1('madhusudhan'));
