function isSumOfCubes(s){
  // * Description
  /*
    - A cubic number is a number where the sum of its digits cubed is equivalent to the number itself:
      153 is such a "cubic" number : 1^3 + 5^3 + 3^3 = 153
    - The cubic number must be at most 3 digits!
  */
  
  //* Implementation
  // define variables
  let tempVals = ""
  let potentialNums = []
  let cubicNums = []
  
  // get all numbers from string
  for(let i = 0; i < s.length; ++i){
    // if current char is number
    if(/\d/.test(s[i])){
      // push to temp string
      tempVals += s[i]
    }
    
    // if temp number is at 3 digits, or this is last iteration of loop, or the next value is a letter (and tempVals length is > 0)
    if((tempVals.length === 3 || i === s.length - 1 || !/\d/.test(s[i+1])) && tempVals.length > 0){
      // push number to potentialNums (convert to integer first)
      potentialNums.push(+tempVals)
      // reset temp string
      tempVals = ""
    }
  }
  
  // get cubic numbers from potentialNums
  cubicNums = potentialNums.filter(v=>[...``+v].reduce((a,b)=>a + b**3,0) === v)
  
  // log values
  console.log(s)
  console.log(potentialNums)
  console.log(cubicNums)
  
  // if cubic nums exist, return them and sum of them and "Lucky", else return "Unlucky"
  return cubicNums.length > 0 ? `${cubicNums.join(" ")} ${cubicNums.reduce((a,b)=>a+b,0)} Lucky` : "Unlucky"
}


