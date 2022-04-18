function isValidIP(s) {
  
  let arr = s.split`.`

  console.log(s)
  console.log(arr)
    
  if(arr.length != 4) return false
  
  for(let i = 0; i < arr.length; ++i){
    if(parseInt(arr[i]) < 0 || parseInt(arr[i]) > 255) return false
    if(/[a-z]/ig.test(arr[i])) return false
    if(arr[i].length>1 && arr[i].charAt(0) == `0`) return false
    if(arr[i].includes(` `)) return false
    if(arr[i].includes(`\n`)) return false
    if(!arr[i] || arr[i] == ``) return false
  }
  return true
}

isValidIP=(s,a=s.split`.`)=>a.every((v,i)=>a.length==4&v>=0&v<256&!/[a-z]/ig.test(v)&(v.length>1?v[0]!=0:!0)&!v.includes` `&!v.includes`\n`&v!=``)
