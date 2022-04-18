const expandUsernames = data => {
  let result = []
  
  for(let i=0; i<data.length; ++i){
    let names = data[i][0].split(`,`).map(v=>v.trim()).filter(v=>v)    
    for(let x=0; x<names.length; ++x){
      result.push([names[x],data[i][1]])
    }
  }
  
  return result
}

expandUsernames=(d,r=[])=>(z=>r)(d.map((v,i)=>v[0].split`,`.map(v=>v.trim()).filter(v=>v).map(v=>{r.push([v,d[i][1]])})))
