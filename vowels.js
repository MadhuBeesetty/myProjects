//find the number of vowels in a string
//using recursion
const fun =(str,i=0,vowels=0,obj={a:1,e:1,i:1,o:1,u:1}) => {
  if(i == str.length) return vowels;
  if(obj[str[i]]) vowels=vowels+1;
  return fun(str,i+1,vowels,obj);
};

console.log(fun('madhu'));

//using in built functions and loops
 
const fun1 = (str1) => {
  let count =0;
  let checker = ['a','e','i','o','u'];
  for (var char of str1) {
    if(checker.includes(char)) {
    count++;
    }
  }
  console.log(count);
}

fun1('madhusudhan');

// using regular expressions

const fun2 = (str2) => {
  const matches = str2.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

console.log(fun2('aeiousmadhu'));
