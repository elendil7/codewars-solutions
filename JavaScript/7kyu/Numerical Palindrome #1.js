function palindrome(num) { 
  if(num < 0 || +num !== num) return `Not valid`
  
  let str = ``+num
  return str === [...str].reverse().join``
} 
