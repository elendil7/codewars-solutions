solve=a=> a.map(v=>[...v.toLowerCase()].map((v,i)=>` abcdefghijklmnopqrstuvwxyz`.indexOf(v)==++i?1:0).reduce((a,b)=>a+b,0))

solve=a=>a.map(v=>[...v.toLowerCase()].filter((v,i)=>`abcdefghijklmnopqrstuvwxyz`.indexOf(v)==i).length)
