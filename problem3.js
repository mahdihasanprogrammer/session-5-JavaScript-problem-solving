
function  checkPassword(password){

  // let isValid;
  if(typeof password !== 'string'){
    return{
        isValid:false,
        reasons: 'Invalid input'
    }
  }
  let length = password.length;

  let hasNumber= false;
  let hasUpper =false;
  let hasSpace =password.includes(' ');


  const reasons = [];
  for(const letter of password){
    
    // number check;
    if(letter >= '0' && letter <= '9'){
      hasNumber = true;
    }

    // upperCase check;
    if(letter >= 'A' && letter <= "Z"){
      hasUpper = true;
    }
  }

  // condition 1 check;
    if(hasNumber === false){
      reasons.push('missing number')
    }

     // condition 2 check;
    if(!hasUpper){
      reasons.push('missing upper')
    }

    // condition 3 check;
    if(hasSpace === true){
      reasons.push('remove space!!')
    }
    
    // condition 4 check;
    if(length <8){
      reasons.push('8 character must')
    }


  // let isValid =reasons.length ===0;
  // evabeo kora jay;
  
  if(reasons.length === 0){
    isValid = true;
  }



  return {
    isValid,
    reasons
  }
}

// const output = checkPassword("hellWorld");
// console.log(output);
// console.log(checkPassword("Hello123"))
console.log(checkPassword(123))