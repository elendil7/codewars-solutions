function expandedForm(num) {
  const arr =  num.toString().split("")  
  
  let result = "";
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == 0) continue;
    result = result.concat(`${arr[i]}${"0".repeat([arr.length-1-i])} + `)
  }
  
  // remove leading "+" and whitespace characters
  return result.slice(0, -3);
}

expandedForm=n=>n.toString().split("").map((v,i,arr)=>`${arr[i]}${"0".repeat([arr.length-1-i])}`).filter(v=>parseInt(v)>0).join(" + ")
