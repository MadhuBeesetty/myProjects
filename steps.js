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
