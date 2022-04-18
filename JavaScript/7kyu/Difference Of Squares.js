differenceOfSquares=(n,a=[...Array(n)])=>a.reduce((a,b,i)=>++i+a,0)**2-a.reduce((a,b,i)=>++i**2+a,0)
