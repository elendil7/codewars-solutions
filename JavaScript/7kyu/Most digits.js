function findLongest(arr){  
  return arr.sort((a,b)=>String(a).split``.length<String(b).split``.length)[0]  
}

findLongest=a=>a.sort((a,b)=>(``+a).split``.length<(``+b).split``.length)[0]

findLongest=a=>a.sort((a,b)=>`${a}`.split``.length<`${b}`.split``.length)[0]

findLongest=a=>a.sort((a,b)=>(``+a).length<(``+b).length)[0]
