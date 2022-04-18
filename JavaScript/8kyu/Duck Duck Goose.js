duckDuckGoose=(p,n)=>n>p.length?p[--n%p.length].name :p[--n].name

duckDuckGoose=(p,n,l=p.length)=>n>l?p[--n%l].name:p[--n].name
