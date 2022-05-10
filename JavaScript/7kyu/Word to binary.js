function wordToBin(str){
  return [...str].map(v=>v.charCodeAt().toString(2)).map(v=>"0".repeat(8-v.length)+v)
}
