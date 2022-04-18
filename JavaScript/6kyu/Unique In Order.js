var uniqueInOrder=function(seq){
  // turn seq into arr (if required)
  let arr;
  if(Array.isArray(seq) === true) {
    arr = seq;
  } else {
    arr = seq.split("")
  }
  
  // edge cases
  if(arr.length === 1) return arr
  if(arr.length === 2 && arr[0] === arr[1]) return [arr.shift()];
  
  
  // main code
  let finalArr = [];
  for(let i = 0; i < seq.length; i++) {
    finalArr.push(arr[i])
    if(arr[i] === arr[i+1]) {
      finalArr.pop()
    }
  }
  return finalArr;
}

// [...new Set(i.split(""))]
