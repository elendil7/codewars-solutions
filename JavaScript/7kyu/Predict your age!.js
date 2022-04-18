predictAge=(a,b,c,d,e,f,g,h)=>~~([a,b,c,d,e,f,g,h].map(v=>v*v).reduce((a,b)=>a+b)**.5/2)

predictAge=(...a)=>~~([...a].reduce((a,b)=>a+b*b,0)**.5/2)
