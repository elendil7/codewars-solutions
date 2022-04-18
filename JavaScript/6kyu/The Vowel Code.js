x=[...`aeiou`]
encode=s=>[...s].map(v=>x.includes(v)?x.indexOf(v):v).join``
decode=s=>[...s].map(v=>v<6?x[v]:v).join``

x=[...`aeiou`]
encode=s=>s.replace(/[aeiou]/g,v=>x.indexOf(v))
decode=s=>s.replace(/\d/g,v=>x[v])

encode=s=>s.replace(/[aeiou]/g,v=>`aeiou`.indexOf(v))
decode=s=>s.replace(/\d/g,v=>`aeiou`[v])
