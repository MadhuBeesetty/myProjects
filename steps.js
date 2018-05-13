// construct steps
// output
//
// #
// ##
// ###
//

// using for loop
const steps = (num) => {
  for (var i=0; i <  num; ++i){
    let str = '';
    for (var j=0; j < num; ++j){
      if(j<=i) {
      str = str+'#';
      }else{
      str = str+' ';
      }
    }
      console.log(str);
  }
};

steps (3);

// using recursion

const fun = (num1 , i=0, j=0, str1='' ) => {
  if(i === num1) return;
  if(j <= i){
  str1 = str1+'#';
  }else{
  str1 = str1+' ';
  };
  if(j === num1){
    console.log(str1);
    return fun(num1, i+1, j=0, str1='');
  }
return fun(num1, i , j+1, str1);
}

fun(3);
