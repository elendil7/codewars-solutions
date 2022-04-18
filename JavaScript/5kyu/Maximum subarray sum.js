maxSequence=(a)=>{
  console.log(a)
  let tempArr = [];
  let results = 0;
  for(let i = 0; i < a.length; i++){
    for(let x = i; x < a.length; x++){
      tempArr.push(a[x])
      if(tempArr.reduce((a,b)=>a+b) > results) results = tempArr.reduce((a,b)=>a+b);
    }
    tempArr = [];
  }
  console.log(results)
  return results;
}
