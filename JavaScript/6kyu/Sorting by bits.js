sortByBit=a=>a.sort((a,b)=>((x,y)=>x===y ? a-b : x-y)(a.toString(2).replace(/0/g,``).length, b.toString(2).replace(/0/g,``).length))
