  function prime_no(num)
{

    let count=0;

    for(let i=0; i<=num;i++){
     
	if(num%i==0){
      count++
   }

  }
	if(count==2){
     console.log("Yes it is Prime")
	}
    else{

    console.log("Not a Prime")
	}

}


prime_no(13);