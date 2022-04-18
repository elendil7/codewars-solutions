var countDeafRats = function(town) {
  town = town.split(`P`).map(v=>v.replace(/\s/g,``))
  
  let left = [], right = []
  
  for(let i=0; i<town[0].length; ++i){
    if(i%2) left.push(town[0][i-1] + town[0][i])
  }
  for(let i=0; i<town[1].length; ++i){
    if(i%2) right.push(town[1][i-1] + town[1][i])
  }
  
  let finalLeft = left.filter(v=>v==`O~`)
  let finalRight = right.filter(v=>v==`~O`)
  
  return finalLeft.length + finalRight.length
}

countDeafRats=(t,x=t.split`P`.map(v=>v.replace(/\s/g,``)).map((x,i)=>[...x].map((v,p,a)=>p%2?a[--p]+v:``).filter(v=>v==(i<1?`O~`:`~O`))))=>x[0].length+x[1].length
