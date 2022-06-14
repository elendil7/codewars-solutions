function sumR(x) {
  return x.reduce((a,b)=>a+b,0)
}

function sumR(x,i,sum) {
  if(!i) i = 0
  if(!sum) sum = 0
  if(x.length < 1) return 0
  return x.length-1==i?sum+x[i]:sumR(x,i+1,sum+x[i])
}
