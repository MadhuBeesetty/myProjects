//building a pyramid
//  # 
// ### 
//#####

const pry = (size) => {
  const midPoint = Math.floor((size*2-1)/2);

  for (var row =0; row < size; row++){
    let str = '';
   for (var column =0; column<size*2-1; column++){
     if((midPoint-row <= column) && (midPoint+row >= column)){
     str = str+'#';
     }else{
     str = str+' ';
     }
   }
    console.log(str);
  }
}

pry (6);

