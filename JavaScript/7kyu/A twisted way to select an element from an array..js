select=(x,y)=>y.find(v=>v[0]==x.sort((a,b)=>b.localeCompare(a))[2][2])||`Nothing here`

select=(x,y)=>y.find(v=>v[0]==x.sort().at(-3)[2])||`Nothing here`
