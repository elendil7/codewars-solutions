maxTriSum=n=>[...new Set(n.sort((a,b)=>a-b))].slice(-3).reduce((a,b)=>a+b)
