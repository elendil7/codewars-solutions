modifiedSum=(a,n)=>a.map(v=>v**n).reduce((a,b)=>a+b)-a.reduce((a,b)=>a+b)

modifiedSum=(a,n)=>a.reduce((a,b)=>a+b**n,0)-a.reduce((a,b)=>a+b)
