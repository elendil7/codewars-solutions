const twoSum=(n,t)=>{for(let i = 0; i < n.length; i++){for(let x = 0; x < n.length; x++){if(i === x) continue;if(n[i]+n[x] === t) return [i, x]}}}
