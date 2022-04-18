function rank(st, we, n) {
  let z=` abcdefghijklmnopqrstuvwxyz`
  let names = st.split`,`
  
  if(!st[0]) return `No participants`
  if(n > names.length) return `Not enough participants`
  
  let ranks = names.map(v=>[...v].map(x=>z.indexOf(x[0].toLowerCase())).reduce((a,b)=>a+b,0))
  let soms = ranks.map((v,i)=>v+names[i].length)
  let winningNums = soms.map((v,i)=>v*we[i])
  let finalArr = []
  
  for(let i=0; i<winningNums.length; ++i){
    finalArr.push([names[i], winningNums[i]])
  }
  
  finalArr.sort((a,b)=>a[1]==b[1]?(a[0]).localeCompare(b[0]):b[1]-a[1])
  
  return finalArr[--n][0]
}

rank=(s,w,n,z=s.split`,`)=>(f=>!s[0]?`No participants`:n>f.length?`Not enough participants`:f[--n][0])(z.map((v,i)=>[z[i],([...v].reduce((a,b)=>a+`ᅟabcdefghijklmnopqrstuvwxyz`.indexOf(b[0].toLowerCase()),0)+z[i].length)*w[i]]).sort((a,b)=>a[1]==b[1]?(a[0]).localeCompare(b[0]):b[1]-a[1]))

rank=(ᅟ,ॱ,ᅠ,ㅤ=ᅟ.split`,`)=>(ㅤ=>!ᅟ[0]?`No participants`:ᅠ>ㅤ.length?`Not enough participants`:ㅤ[--ᅠ][0])(ㅤ.map((ᅠ,ᅟ)=>[ㅤ[ᅟ],([...ᅠ].reduce((ㅤ,ᅟ)=>ㅤ+`ᅟabcdefghijklmnopqrstuvwxyz`.indexOf(ᅟ[0].toLowerCase()),0)+ㅤ[ᅟ].length)*ॱ[ᅟ]]).sort((ᅟ,ᅠ)=>ᅟ[1]==ᅠ[1]?ᅟ[0].localeCompare(ᅠ[0]):ᅠ[1]-ᅟ[1]))
