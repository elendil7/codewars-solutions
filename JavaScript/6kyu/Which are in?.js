function inArray(a1,a2){
  function checkForSubstring(i){
    for(let x = 0; x < a1.length; x++){
      if(a2[i].includes(a1[x])) arr.push(a1[x])
    }
  }
  
  let arr = [];
  
  for(let i = 0; i < a2.length; i++){
    checkForSubstring(i);
  }

  return [...new Set(arr.sort())];
}
