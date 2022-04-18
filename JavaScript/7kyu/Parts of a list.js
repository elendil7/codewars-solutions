function partlist(arr) {
  let res = []
  
  for(let i = 0; i < arr.length-1; i++){
    res.push([arr.slice(0,i+1).join(` `), arr.slice(i+1).join(` `)])
  }
  
  return res
}

partlist=a=>a.map((v,i,a)=>i!=a.length-1?[a.slice(0,i+1).join` `,a.slice(i+1).join` `]:"").filter(v=>v)

partlist=a=>a.map((v,i)=>i<a.length-1?[a.slice(0,i+1).join` `,a.slice(i+1).join` `]:``).filter(v=>v)

partlist=a=>a.map((v,i)=>[a.slice(0,i).join` `,a.slice(i).join` `]).slice(1)
