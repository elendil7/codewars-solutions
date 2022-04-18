rowWeights=(a)=>[a.filter((v,i)=>i%2==0).reduce((a,b)=>a+b,0),a.filter((v,i)=>i%2).reduce((a,b)=>a+b,0)]
