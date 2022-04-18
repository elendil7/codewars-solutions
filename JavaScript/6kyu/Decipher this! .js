function decipherThis(str) {  
  let arr = str.split` `
  
  let result = arr.map(v=>{
    const nums = v.replace(/[a-z]/ig,``)
    const letters = v.replace(/\d/g,``)
    return String.fromCharCode(nums) + letters.slice(-1) + (letters.length<2?``:letters.slice(1,-1) + letters.slice(0,1))
  })
  
  return result.join` `
}

decipherThis=s=>s.split` `.map(v=>((n,l)=>String.fromCharCode(n)+l.slice(-1)+(l.length<2?``:l.slice(1,-1)+l.slice(0,1))) (v.replace(/[a-z]/ig,``),v.replace(/\d/g,``))).join` `

decipherThis=ᅟ=>ᅟ.split` `.map(ॱ=>((ᅠ,ㅤ)=>String.fromCharCode(ᅠ)+ㅤ.slice(-1)+(ㅤ.length<2?``:ㅤ.slice(1,-1)+ㅤ.slice(0,1)))(ॱ.replace(/[a-z]/ig,``),ॱ.replace(/\d/g,``))).join` `
