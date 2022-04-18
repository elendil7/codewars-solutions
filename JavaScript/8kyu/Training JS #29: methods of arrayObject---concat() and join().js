function bigToSmall(arr){
  return [].concat(...arr).sort((a,b)=>b-a).join`>`
}
