uniTotal=s=>!s[0]?0:[...s].map(v=>v.charCodeAt(0)).reduce((a,b)=>a+b)

uniTotal=s=>s?[...s].reduce((a,b)=>a+b.charCodeAt(0),0):0

uniTotal=s=>[...s].reduce((a,b)=>a+b.charCodeAt(0),0)
