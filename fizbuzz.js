const fun = (num) => {
  if(num % 3 ===0 && num % 5 === 0){ 
    console.log('fizbuzz')
  }else if (num % 3 === 0){
      console.log('fiz');
    }else if(num % 5 === 0){ console.log('buzz');
    }
  };
 fun(3);
  fun(5);
  fun(15);
