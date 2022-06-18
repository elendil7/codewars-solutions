function binRota(arr){
  let res = []
  for(let i = 0; i < arr.length; ++i) res.push(i%2?arr[i].reverse():arr[i])
  return [].concat(...res)
}

binRota=a=>[].concat(...a.map((v,i)=>i%2?v.reverse():v))
