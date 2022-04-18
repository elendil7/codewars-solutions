function maxRot(n) {
  let str = ``+n
  let res = [n]
  
  for(let i=0; i<str.length; ++i){
    // * shift num to left, but don't shift i integers at start of num
    const startOfNum = str.slice(0, i) // beginning of num always unchanged, increases by 1 per iteration
    const shiftedNum = str.slice(i, i+1) // get number at the front of string (just after startOfNum nums), to be placed at the end of string
    const middleNum = str.slice(i+1) // get the rest of the nums, located beyond startOfNum nums and middleNums
    
    str = startOfNum + middleNum + shiftedNum
    res.push(str)
  }
  
  return Math.max(...res)
}
