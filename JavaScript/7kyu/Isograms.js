function isIsogram(s){
  return !/(\w).*\1/i.test(s);
}

isIsogram=s=>{
  if(String(s.toLowerCase().split``.sort((a,b)=>a-b)) !== String([...new Set(s.toLowerCase().split``.sort((a,b)=>a-b))])) return false
  return /^[a-z]*$/i.test(s)  
}

isIsogram=s=>``+s.toLowerCase().split``.sort((a,b)=>a-b)==``+[...new Set(s.toLowerCase().split``.sort((a,b)=>a-b))]&&/^[a-z]*$/i.test(s)

isIsogram=(s,x=s.toLowerCase().split``.sort((a,b)=>a-b))=>``+x==``+[...new Set(x)]&&/^[a-z]*$/i.test(s)

isIsogram=(s,x=s.toLowerCase().split``.sort((a,b)=>a-b))=>``+x==``+[...new Set(x)]

isIsogram=(s,x=[...s.toLowerCase()])=>``+x==``+[...new Set(x)]
