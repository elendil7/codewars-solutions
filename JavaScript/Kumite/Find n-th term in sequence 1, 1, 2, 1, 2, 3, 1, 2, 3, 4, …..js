solution=n=>Array(n).fill(n).map((v,i)=>[...Array(++i).keys()].map(v=>++v)).flat()[--n]

solution=(n,k=~((2*n)**.5-.5))=>n-k*++k/2
