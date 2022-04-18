function spinWords(str){  
  let arr = str.split(` `)
  
  let reversed = arr.map(v=>v.length>4?v.split``.reverse().join``:v)
  
  let joined = reversed.join` `
  
  return joined  
}

spinWords=s=>s.split` `.map(v=>v[4]?v.split``.reverse().join``:v).join` `

spinWords=s=>s.split` `.map(v=>v[4]?[...v].reverse().join``:v).join` `
