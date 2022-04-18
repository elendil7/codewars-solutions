function encrypt(text, n) {
  if(text === "" || !text || n < 0) return text;
  
  let arr = text.split("")
  
  let tempOdd = [], tempEven = []
  
  // encrypt with "n" cycles
  for(let i = 0; i < n; i++){
    for(let x = 0; x < arr.length; x++){
      if(x%2) tempOdd.push(arr[x])
      else tempEven.push(arr[x])
    }
    arr = [...tempOdd, ...tempEven]
    tempOdd = []
    tempEven = []
  }
  return arr.join("");
}

function decrypt(text, n) {
  if(text === "" || !text || n < 0) return text;

  let arr = text.split("")
  
  console.log(text, "(text)", n, "(n)")
  
  let firstHalf, secondHalf, result = []
  
  // decrypt with "n" cycles
  for(let i = 0; i < n; i++){
    firstHalf = arr.slice(0, Math.floor(arr.length/2))
    secondHalf = arr.slice(Math.floor(arr.length/2))

    for(let x = 0; x < arr.length; x++){
      if(x % 2) {
        result+=firstHalf[0]
        firstHalf = firstHalf.slice(1)
      }else{
        result+=secondHalf[0]
        secondHalf = secondHalf.slice(1)
      }
    }
    
    arr = [...result];
    result = []
  }
  
  console.log(`Result: ${arr.join("")}\n`)
  return arr.join("");
}
