function isNice(arr){
  if(!arr || arr.length<1) return false
  for(let i = 0; i < arr.length; i++){
    if(arr.includes(arr[i]-1) === false && arr.includes(arr[i]+1) === false){
      return false
    }
  }
  return true;
}
