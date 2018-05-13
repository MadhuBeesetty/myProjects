// reverse a string

const fun = (str) => {
  let arr = str.split('');
  arr.reverse();
  str = arr.join('');
  console.log(str);
}

fun('madhu');

