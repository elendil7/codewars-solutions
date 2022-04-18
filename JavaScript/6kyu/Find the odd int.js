function findOdd(A) {
  if(A.length === 1) return A[0]
  let num;
  for(let x = 0; x < A.length; x++){
    for(let y = 0; y < A.length; y++){
       if (A[x] === A[y]) num += 1;
    }
    if(num % 2 || num === 1) return A[x]; 
    num = 0;
  }
}
