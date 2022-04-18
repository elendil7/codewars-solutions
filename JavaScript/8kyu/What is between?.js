function between(a,b){
  let res = []
  
  for(i=a;i<=b;++i){
    res.push(i)
  }
  return res
}

between=(a,b)=>Array(a<0?-1*a+b+1:b-a+1).fill(a).map((v,i)=>v+i)

between=(a,b)=>Array(b-a+1).fill(b).map((v,i)=>v-i).reverse()

between=(a,b)=>Array(Math.abs(a-++b)).fill(a).map((v,i)=>v+i)

between=(a,b)=>Array(b-a+1).fill(a).map((v,i)=>v+i)
