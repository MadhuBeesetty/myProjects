//a somple algorithm to check palendrome//
const pale = (a,b="",j=(a.length-1),i=0)=>{
b=b+a[j]
if(a.length-1== i){
if(a==b){
return "palindrome"
 }
else{
return "not a palindrome"
  }
}
return pale(a,b,j-1,i+1)
}
console.log(pale("mom"))
console.log(pale("son"))
