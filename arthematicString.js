// perform the arthematic opration "(((4+5)+(3+6))-(4-2))"
// asked in service.com interview 
// leetcode hard question


const fun = (str, i=0, start=0, end=0)=>{
  //  console.log(i,str[i]);
  if(i === str.length)return str;
  if(str[i] === "(")start = i;
  if(str[i] === ")"){
    end = i;
    var val = (str.slice(start, end+1));
    for(var j=0; j<var.length; j++){
    if(typeof())
    }
    val = val.toString();
    str = str.slice(0,start+1)+val+str.slice(end,str.length);
    return fun(str, i+1, start=0, end=0)
  }
  return fun(str, i+1, start, end);
};

fun("(5+6)");
//fun("(((4+5)+(3+6))-(4-2))");
