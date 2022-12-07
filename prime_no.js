  function prime_no(num){

    let count=0;
    for(let i=0; i<=num;i++){
     if(num%i==1){
      count++
   }
  }if(count==0){
     console.log("Yes it is Prime")
}
    else{

    console.log("Not a Prime")
}

  }