function posAverage(s) {
  let arr = s.split`, `
  let count = 0
  let percentageCount = 0
  
  // define character checker function
  let charChecker = (str1, str2) => {
    let tempCount = 0
    for(let i = 0; i < str1.length; ++i){
      if(str1[i] === str2[i]) tempCount ++
    }
    return tempCount
  }
  
  // compare each substring against each substring
  // for substring 1
  for(let i = 0; i < arr.length; ++i){
    // against substring 2
    for(let j = 0; j < arr.length; ++j){
      // if 1st arr index === 2nd arr index
      if(i === j) continue
      // check for matching characters
      count += charChecker(arr[i], arr[j])
      // increment count for deriving percentage (later)
      percentageCount ++
    }
  }

  // return final percentage
  return +((count / (arr[0].length * percentageCount)) * 100).toFixed(10)
}
