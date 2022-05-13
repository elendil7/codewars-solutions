const ultimateReverse = s => {
  let reversed = [...s.map(v=>[...v].reverse().join``)].reverse().join``
  let final = []
  
  for(let i = 0; i < s.length; ++i){
    final.push(reversed.slice(0,s[i].length))
    reversed = reversed.slice(s[i].length)
  }
  
  return final
}
