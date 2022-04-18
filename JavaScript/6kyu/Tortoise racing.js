race=(a,b,g)=>{
  if(a >= b) return null;
  console.log(a,b,g)
  
  let seconds = 0;
  
  let a_feetPerSec = a/3600;
  let b_feetPerSec = b/3600;
  
  let a_distance = g;
  let b_distance = 0;
  
  console.log(a_feetPerSec)
  console.log(b_feetPerSec)
  
  while(a_distance>b_distance){
    a_distance+=a_feetPerSec
    b_distance+=b_feetPerSec
    seconds++;
  }
  

  let hours = 0;
  let mins = 0;
  let secs = 0;
  
  // hours = hours/60>1
  
  seconds = Math.round(seconds-1)
  
      return [
        parseInt(seconds / 60 / 60),
        parseInt(seconds / 60 % 60),
        parseInt(seconds % 60)
    ]
  
}
