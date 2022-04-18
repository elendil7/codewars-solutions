function calc(s){
  let total1 = [...s].map(v=>v.charCodeAt()).join``  
  let total2 = total1.replace(/7/g,`1`)
  return total1.split``.reduce((a,b)=>+a + +b) - total2.split``.reduce((a,b)=>+a + +b)
}

calc=(s,x=[...s].map(v=>v.charCodeAt()).join``,y=x.replace(/7/g,1))=>[...x].reduce((a,b)=>+a+ +b)-[...y].reduce((a,b)=>+a+ +b)
