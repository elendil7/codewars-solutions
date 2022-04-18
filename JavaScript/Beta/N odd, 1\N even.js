nole=(n,r)=>n<2?r:nole(n-1,(r||1)*(n%2?n:1/n))
