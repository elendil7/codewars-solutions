function initials(n){
  let arr = n.split` `
  let final = ``
  
  for(let i = 0; i < arr.length - 1; ++i){
    final += arr[i][0].toUpperCase() + `.`
  }
  
  return final + (x=>x[0].toUpperCase() + x.slice(1).toLowerCase())(arr[arr.length-1])
}
