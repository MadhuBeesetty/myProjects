const fun = (str, str1=str.split(' ')) => {
  let str2 = [];
  for(let i=0; i<str1.length; ++i){
  str2.push(str1[i][0].toUpperCase()+str1[i].slice(1));
  }
  console.log(str2.join(' '));
}
fun('a short sentence');
