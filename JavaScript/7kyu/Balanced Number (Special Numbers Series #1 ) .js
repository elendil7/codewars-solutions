balancedNum=n=>{
  if(n<100) return `Balanced`
  
  let str = ``+n
  let arr = [...str]
  
  str.length%2 ? arr : arr.splice(~~(str.length/2),1)
  
  let mid = ~~(arr.length/2)
  
  let left = arr.slice(0,mid)
  let right = arr.slice(mid+1)
  
  return left.reduce((a,b)=>+a+ +b,0) == right.reduce((a,b)=>+a+ +b,0) ? `Balanced` : `Not Balanced`
}

balancedNum=(n,a=[...``+n])=>{
  a.length%2?a:a.splice(~(a.length/2),1),m=~(a.length/2),l=a.slice(0,m),r=a.slice(++m)
  return (n<1e2|l.reduce((a,b)=>+a+ +b,0)==r.reduce((a,b)=>+a+ +b)?`Balanced`:`Not Balanced`)
}
