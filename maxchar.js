const fun = (str , obj ={}) => {

  let max = 0;
  maxChar = '';

  for (let char of str) {
    if(!obj[char]){
    obj[char] = 1
    }else{
    obj[char] = obj[char] +1;
    }
  };

  for (let char in obj){
    if(obj[char] > max){
      max = obj[char];
      maxChar = char;
    }
  }
  console.log(maxChar);
}
fun('maaadhu');

