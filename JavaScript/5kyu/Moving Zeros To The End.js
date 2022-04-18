moveZeros=a=>a.filter(v=>v!==0).concat(new Array(a.length-a.filter(v=>v!==0).length).fill(0))

moveZeros=a=>a.filter(v=>v!==0).concat(new Array(a.filter(v=>v===0).length).fill(0))

moveZeros=a=>a.filter(v=>v!==0).concat([...`0`.repeat(a.filter(v=>v===0).length)].map(v=>Number(v)))

moveZeros=a=>[...a.filter(v=>v!==0),...new Array(a.filter(v=>v===0).length).fill(0)]
