const removeSmallest = (n) => {
  let a = [...n]
  a.splice(a.indexOf(Math.min(...a)),1)  
  return a
}

removeSmallest=(n,a=[...n],x=a.splice(a.indexOf(Math.min(...a)),1))=>a
