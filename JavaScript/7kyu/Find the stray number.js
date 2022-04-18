function stray(nums) {
  let arr = nums.sort((a,b)=>a-b)
  if(arr[0] === arr[1]) return arr[arr.length-1]
  else return arr[0]
}

stray=n=>{
  let a = n.sort((a,b)=>a-b)
  return a[0]==a[1]?a[a.length-1]:a[0]
}

stray=n=>{let a = n.sort((a,b)=>a-b) ;return a[0]==a[1]?a[a.length-1]:a[0]}
