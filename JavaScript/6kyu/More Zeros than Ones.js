function moreZeros(s){
  return [...new Set([...s].filter(v=>(x=>x.replace(/1/g,``).length>x.replace(/0/g,``).length)(v.charCodeAt().toString(2))))]
}
