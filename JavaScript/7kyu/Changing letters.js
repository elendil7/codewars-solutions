swap=s=>[...s].map(v=>/[aeiou]/.test(v)?v.toUpperCase():v).join``

swap=s=>s.replace(/[aeiou]/g,v=>v.toUpperCase())
