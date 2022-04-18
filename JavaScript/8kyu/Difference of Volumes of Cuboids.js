findDifference=(a,b)=>[a.reduce((a,b)=>a*b), b.reduce((a,b)=>a*b)].sort((a,b)=>b-a).reduce((a,b)=>a-b)
