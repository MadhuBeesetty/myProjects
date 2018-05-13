// checking anagrams
const fun = (str1, str2, obj1={}, obj2={}) => {
  if(str1.length == str2.length){
  let ana1 = str1.replace(/[^\w]/g, '').toLowerCase();
  let ana2 = str2.replace(/[^\w]/g, '').toLowerCase();

  for (let char of ana1){
    if(!obj1[char]){
    obj1[char] = 1;
    }else{
    obj1[char] = obj1[char]+1;
    }
  }

  for (let char of ana2){
    if(!obj2[char]){
    obj2[char] = 1;
    }else{
    obj2[char] = obj2[char]+1
    }
  }
console.log(obj1,obj2); 
    if(Object.keys(obj1).length === Object.keys(obj2).length){
      for(let char1 in obj1) {
        if (obj1[char1] !== obj2[char1]){
        return 'not anagrams';
        }else{
        return 'anagram';
        }
      }
    }else{
    return 'not anagrams'
    }
  }else {
  return 'not anagrams';
  }
};

console.log(fun('rail safety','fairy tales'));
console.log(fun('hi there','bye there'));
