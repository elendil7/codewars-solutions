function remove (s){
  let arr = s.split("").reverse()
  for(let i = 0; i < arr.length; i++){
    if(arr[0] == `!`) arr.shift()
    else return arr.reverse().join(``)
  }
  return arr.reverse().join(``)
}
