cubeOdd=a=>a.some(x=>isNaN(x))?undefined:a.map(v=>(x=>x%2?x:0)(v**3)).reduce((a,b)=>a+b)
