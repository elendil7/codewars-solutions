longestPalindrome=function(s){  
  if(!s[2] || s==[...s].reverse().join``) return s.length  
  
  let arr = [...s]
  let max = 0
  
  // for each letter of string
  for(let i=0; i<arr.length; i++){
    // for each substring (variation of string)
    for(let x=i; x<arr.length+1; x++){
      if(s.slice(i,x) == [...s.slice(i,x)].reverse().join``){
        max = Math.max(max, s.slice(i,x).length)
      }
    }
  }
  
  return max
}

longestPalindrome=(s,a=[...s],l=a.length,m=0)=>{  
  for(i=0;i<l;i++)for(x=i;x<l+1;x++)(t=>t==[...t].reverse().join``?m=Math.max(m,t.length):0)(s.slice(i,x))
  return!s[2]|s==a.reverse().join``?l:m
}
