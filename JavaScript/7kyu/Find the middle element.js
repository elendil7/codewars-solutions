function gimme (triplet) {  
  const sorted = [...triplet].sort((a,b)=>a-b)
  return triplet.indexOf(sorted[1])
}

gimme=t=>t.indexOf([...t].sort((a,b)=>a-b)[1])
