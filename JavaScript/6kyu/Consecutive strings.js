function longestConsec(s, k) {
  // edge cases
  if(s.length === 0 || k > s.length || k <= 0) return ""
  
  // vars
  let tempStr = ""
  let longest = ""
  
  // for each string in array
  for(let x = 0; x < s.length; x++){
    // slice string at specified length
    tempStr = s.slice(x, x+k)
    // get longest string
    if(longest.length < tempStr.join("").length) longest = tempStr.join("")
  }
  return longest;
}
