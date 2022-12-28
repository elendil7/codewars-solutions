findOddNames=l=>l.filter(v=>[...v.firstName].map(v=>v.charCodeAt(0)).reduce((a,b)=>a+b,0)%2)
