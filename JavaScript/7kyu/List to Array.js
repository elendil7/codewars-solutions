function listToArray(list, arr) {
  if(arr == undefined) arr = []
  
  if(list.next == null){
    return [...arr, list.value]
  }else{
    return listToArray(list.next, [...arr, list.value])
  }
}
