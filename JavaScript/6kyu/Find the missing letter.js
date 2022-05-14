function findMissingLetter(arr){
  let a = `abcdefghijklmnopqrstuvwxyz`
  
  for(let i = 0; i < arr.length; ++i){
    let current = arr[i].toLowerCase()
    if(a.indexOf(current)!==a.indexOf(arr[i+1].toLowerCase())-1){
      return (x=>arr[0].toLowerCase() === arr[0] ? x : x.toUpperCase())(a[a.indexOf(current)+1])
    }
  }
}
