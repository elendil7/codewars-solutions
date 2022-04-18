function minimumSteps(numbers, value){
  numbers.sort((a,b)=>a-b)
  let total = 0, count = 0
  
  for(let i=0; i<numbers.length; ++i){
    total+=numbers[i]
    if(total >= value) return count
    count++
  }
}

minimumSteps=(n,v)=>(a=>(a>=0?a:n.length)-1)(n.sort((a,b)=>a-b).reduce((a,b,i,z)=>a<v?a+b:[i,z.splice(0)])[0])

minimumSteps=(n,v,t=0,c=0)=>{for(i=0;i<n.sort((a,b)=>a-b).length;++i){t+=n[i];if(t>=v)return c;c++}}
