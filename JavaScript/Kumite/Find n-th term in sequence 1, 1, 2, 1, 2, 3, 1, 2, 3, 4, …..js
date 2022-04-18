solution=n=>Array(n).fill(n).map((v,i)=>[...Array(++i).keys()].map(v=>++v)).flat()[--n]
