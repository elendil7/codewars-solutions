function remove (str) {
  let arr = str.split(" ")
  
  for(let i = 0; i < arr.length; ++i){
    if(arr[i].replace(/[^!]/g,"").length == 1){
      arr.splice(i, 1)
      --i
    }
  }
  
  return arr.join(" ")
}
