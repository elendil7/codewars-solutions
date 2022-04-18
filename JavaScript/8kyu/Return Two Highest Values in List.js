function twoHighest(arr) {
  arr = [...new Set(arr)]
  return [arr.sort((a,b)=>b-a)[0], arr[1]].filter(v=>v)
}
