sumMul=(n,m)=>m<1?`INVALID`:[...Array(m)].map((v,i)=>++i%n?0:i).reduce((a,b)=>a+b,0)
